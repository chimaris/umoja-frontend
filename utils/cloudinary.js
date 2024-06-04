export function getCloudinaryImageUrl(imageUrl, width) {
  const baseUrl = imageUrl.split('/upload/')[0];
  const imagePath = imageUrl.split('/upload/')[1];

  // Construct the new URL with the width transformation
  return `${baseUrl}/upload/w_${width}/${imagePath}`;
}
