import Compressor from 'compressorjs';
import { useVendorStore } from '~/stores/vendorStore';
import axios from 'axios';

export const upLoadPicture = async ({event, upLoadedFiles, showProgress, profilePicture, profile_photo, errorMessage, mode}) => {
    const vendorStore = useVendorStore();
    if (upLoadedFiles.value.length == 1){
        errorMessage.value = 'Maximum number of images allowed is 1';
        return;
    }
    let file;
    if (mode == 'drop'){
        file= event.dataTransfer.files[0]
    }else{
        file = event.target.files[0];
    }
    
    if (!file) return;

    const allowedFiles = [".png", ".jpeg", ".jpg"];
    const fileExtension = file.name.split(".").pop().toLowerCase();

    if (!allowedFiles.includes("." + fileExtension)) {
        errorMessage.value = "Please upload files having extensions: " + allowedFiles.join(', ');
        return;
    }

    errorMessage.value = "";

    new Compressor(file, {
        quality: 0.7, // Adjust the quality as needed
        maxWidth: 800, // Max width
        maxHeight: 400, // Max height
        success(compressedFile) {
            const filename = compressedFile.name;
            const formData = new FormData();
            formData.append("profile_photo", compressedFile);
            const form = { name: filename, loading: 0 };
            profilePicture.value = [form];
            showProgress.value = true;

            axios.post("https://umoja-production-9636.up.railway.app/api/vendor/upload", formData, {
                headers: {
                    Authorization: `Bearer ${vendorStore.vendorToken}`
                },
                onUploadProgress: ({ loaded, total }) => {
                    profilePicture.value[profilePicture.value.length - 1].loading = Math.floor((loaded / total) * 100);
                    if (loaded == total) {
                        const fileSize = (total < 1024) ? total + "KB" : (loaded / (1024 * 1024)).toFixed(2) + "MB";
                        upLoadedFiles.value.push({ name: filename, size: fileSize });
                        profilePicture.value = [];
                    }
                }
            })
            .then(response => {
                const profileImg = response.data.profile_photo;
                profile_photo.value = profileImg;
            })
            .catch(error => {
                if (error.response) {
                    errorMessage.value = error.response.data.message || 'An error occurred during file upload.';
                } else if (error.request) {
                    errorMessage.value = 'No response received from server. Please try again later.';
                } else {
                    errorMessage.value = 'An error occurred. Please try again later.';
                }
            });
        },
        error(err) {
            errorMessage.value = err.message || "Failed to compress the image";
        },
    });
}
