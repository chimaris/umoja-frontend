 <template>
    <v-container height="100%" class=" mx-auto px-5 " width="100%"
    style="overflow:hidden;padding-bottom: 200px;max-width: 1330px;" flat>
    
    <v-alert v-if="false" class="text-white rounded-lg pa-6"
   color="#00966D"
   
 ><div class="d-flex align-center" style="font-size: 14px;
font-weight: 500;
line-height: 20px;">

     <v-icon class="mr-2" icon="mdi mdi-check-circle"></v-icon> Customer added sucessfully
 </div>
</v-alert>
        <div class="d-flex pb-8 pt-4 justify-space-between">
            <div class="d-flex align-center">

                <h1 style="font-weight: 700;
                        font-size: 24px;
                        line-height: 30px;
                        letter-spacing: -0.02em;
                        ">
                        Create Order
                </h1>

                <div></div>
            </div>
        </div>
        <v-row>
            <v-col cols="12" sm="8">
                <v-sheet class="cardStyle  ">
                    <div class="d-flex justify-space-between">
                        
                        <p style="color: #333;
font-size: 20px;
font-weight: 600;
line-height: 20px;
letter-spacing: -0.2px;">Products</p>

<v-btn variant="text" size="small"  color="#1273EB">Add custom item</v-btn>
</div>
<div class="d-flex my-8 justify-space-between">

                    <v-text-field hide-details  class="borderedinput mr-2"
                     persistent-hint variant="outlined"
                     prepend-inner-icon="mdi mdi-magnify"
                        placeholder="Search"
                         density="compact">
                    </v-text-field>

                    <v-btn style="    border: 1px solid #e5e5e5;" size="large" variant="outlined">Browse products</v-btn>
                 </div>
                 <v-table style="    height: 80%; !important;
   overflow: scroll;">
   <thead>
     <tr style="background: #F8F8F8;
            border-radius: 4px;">
   
       <th  style="font-size: 14px;width: 100px;" class="  font-weight-medium  text-left">
         Product
       </th>
    
       <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
         Quantity
       </th>
       <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
         Price
       </th>
  
       <th style="font-size: 14px;" class=" text-left px-1  font-weight-medium">
         
       </th>
     </tr>
   </thead>
   <tbody>
       <!-- @click="chosen = item.sn" -->
       <tr  
       >
   
       <td style="position:relative;font-size: 14px;height: 100px;" 
        >
        <div style="position: ;top: 24px; width: ;">

            <div  
        class=" d-flex w-100 py-4  ">
          <v-avatar color="grey-lighten-4" class="rounded-lg pa-1 mr-3 ml-0" size="50" ><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1686754027/H468a70379a6043119f5077bf8ba35a7cO_bnnitb.png"></v-img></v-avatar>
          <div >
            <p class="mb-1" style="font-weight: 600;
font-size: 14px!important;
line-height: 20px; min-width: 220px;
color: #1273EB;">Multicolored Ankara Material from Ghana </p>
            <p style="font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #969696;" class="mt-1 text-truncate">Small</p>
            <p style="font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #969696;" class="mt-1 text-truncate">SKU: 5000</p>
            <p style="font-weight: 600;
font-size: 14px;
line-height: 18px;
color: #1273EB;" class="mt-1 text-truncate">€ 250.00</p>
          </div>
        </div>
        </div>

       

    </td>
    
 
 
       <td  class="tableLight px-1">
        <div class="h-100 py-4">

        <div class="d-flex pa-1" style="border-radius: 6px;
border: 1px solid  #CECECE;width: 141px;">
<v-text-field density="compact" hide-details variant="outline" value="0"></v-text-field>
<div>
    <v-btn size="x-small" height="18px" color="grey-lighten-3" flat class="pa-0 mb-1 d-flex align-center text-grey-darken-2 rounded-lg" icon="mdi mdi-menu-up"></v-btn>
    <v-btn size="x-small" height="18px" color="grey-lighten-3" flat class="pa-0 d-flex align-center text-grey-darken-2 rounded-lg" icon="mdi mdi-menu-down"></v-btn>
</div>
</div>        </div>

       </td>
       <td  class="tableThick px-1">
        <div class="h-100 py-4">

        € 250.00
    </div>
    </td>
  
       <td  class="um  px-1">
        <div class="h-100 py-4">
            <v-icon icon="mdi mdi-close-circle-outline"></v-icon>
        </div>
    </td>
       
       <!-- <td style="font-size: 14px;" class="text-grey-lighten-1 px-1">
           <span v-if="chosen !== item.sn ">
               {{ item.total }}
           </span>
           <v-btn v-else color="green" size="small" class=" rounded-lg"> See details</v-btn>
       </td> -->
   </tr>
</tbody>
</v-table>
                </v-sheet>
                <v-sheet class="cardStyle mt-4 ">
                    <div class="d-flex mb-4 align-center">

                        <p style="color: #333;
font-size: 20px;
font-weight: 600;"> Payment
                        </p>
      </div>
      <div  style="color: #969696;
font-size: 14px;
font-weight: 500;
line-height: 24px;
letter-spacing: -0.14px;">
<div class="d-flex mb-3 justify-space-between">

    <p>Subtotal</p>
    <p style="font-weight: 600;color: #333;">€ 250.00</p>
</div>
<div class="d-flex mb-3 justify-space-between">
    <p>Add discount</p>
      <div class="d-flex w-75 justify-space-between">
    <p  style="font-weight: 400;color: #333;">----</p>
    <p style="font-weight: 600;">€ 0.00</p>
</div>
</div>
<div class="d-flex mb-3 justify-space-between">

    <p>Add shipping</p>
      <div class="d-flex w-75 justify-space-between">
    <p  style="font-weight: 400;color: #333;">----</p>
    <p style="font-weight: 600;">€ 0.00</p>
</div>
</div>
<div class="d-flex mb-3 justify-space-between">
    
    <p>Estimated tax</p>
    <div class="d-flex w-75 justify-space-between">
    <p  style="font-weight: 400;color: #333;">Not calculated</p>
    <p style="font-weight: 600;">€ 0.00</p>
</div>
</div>
<div class="d-flex mb-3 justify-space-between">
    
    <p  style="font-weight: 600;color: #333;">Total</p>
    <p  style="font-weight: 600;color: #333;">€ 250.00</p>
</div>
      </div>
      <v-divider class="my-5"></v-divider>
      <p style="color: #333;
font-size: 14px;
font-weight: 500;
line-height: 24px;
letter-spacing: -0.14px;">Add a product to calculate total and view payment options</p>
      <v-divider class="my-5"></v-divider>
      <p style="color: #969696;
font-size: 14px;
font-weight: 500;
line-height: 24px;
letter-spacing: -0.14px;">Taxes may be estimates until the order is created. Learn more about <span style="color: #1273EB;">estimated taxes</span> </p>
                </v-sheet>
        
                <v-sheet class="cardStyle mt-4 py-8">
                    <div class="d-flex justify-space-between align-center">

                        <p style="color: #333;
                            font-size: 20px;
                            font-weight: 600;" class="align-center d-flex">
                            <v-icon class="mr-2" size="small" icon="mdi mdi-list-box-outline"></v-icon>
                             Email Invoice
                        </p>
                        <v-btn style="    border: 1px solid #e5e5e5;" size="large" variant="outlined">Send Invoice</v-btn>
                    </div>
                </v-sheet>
                <v-sheet class="cardStyle mt-4 py-8">
                    <div class="d-flex justify-space-between align-center">
                        <p style="color: #333;
                            font-size: 20px;
                            font-weight: 600;" class="align-center d-flex">
                            <v-icon class="mr-2" size="small" icon="mdi mdi-credit-card-outline"></v-icon>
                            Accept Payment
                        </p>
                    </div>
                    <v-row class="mt-4">
                        <v-col cols="12" md="4"> 
                            <div class="px-2 py-1 w-100" style="border-radius: 6px;
border: 0.5px solid  #CECECE;">

                                <v-radio label="Mark as paid" color="green" value="1"></v-radio>
                            </div>
                        </v-col>
                        <v-col cols="12" md="4"> 
                            <div class="px-2 py-1 w-100" style="border-radius: 6px;
border: 0.5px solid  #CECECE;">

                                <v-radio label="Mark as pending" color="green" value="2"></v-radio>
                            </div>
                        </v-col>
                        <v-col cols="12" md="4"> 
                            <div class="px-2 py-1 w-100" style="border-radius: 6px;
border: 0.5px solid  #CECECE;">

                                <v-radio label="Pay with credit card" color="green" value="3"></v-radio>
                            </div>
                        </v-col>
                    </v-row>
         
           
                </v-sheet>

                <v-sheet class="w-100 mt-4 py-8">
                    <div class="d-flex justify-space-between align-center">
                        <p style="color: #333;
                            font-size: 20px;
                            font-weight: 600;" class="">
                             Timeline
                        </p>
                        <div>

                            <v-checkbox color="green" hide-details>
                                <template v-slot:label>
        <div style="color:#333;
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
            letter-spacing: -0.14px;">
            Show comments
          </div>
          </template>
                            </v-checkbox>    
                        </div>
                                    </div>
                              
    <v-timeline
      density="compact"
      side="end">

      <v-timeline-item
        class="mb-12" fill-dot=""
        size="60"
      >
      <template v-slot:icon>
        <v-avatar size="60" image="https://res.cloudinary.com/payhospi/image/upload/v1688715270/rectangle-22429_agrgwa.png"></v-avatar>
      </template>
      <div style="min-width: 500px;" class="">

      <v-sheet class="cardStyle px-0 w-100 py-4">
        <div>
            <v-text-field placeholder="leave a comment..." hide-details variant="outlined"></v-text-field>
            <v-divider class="my-4"></v-divider>
            <div class="d-flex px-4  justify-space-between">
                <div style="font-size: 32px;" class="d-flex align-center">
                     <v-btn variant="text" icon flat class=" mt-1" ><span style="font-size: 32px;">🙂</span></v-btn>
                     <v-btn variant="text" icon flat class="" ><span style="font-size: 32px;">@</span></v-btn>
                     <v-btn variant="text" icon flat class="" ><span style="font-size: 32px;">#</span></v-btn>
                     <v-btn variant="text" icon flat class="" ><v-icon size="35" icon="mdi mdi-attachment"></v-icon></v-btn>
                </div>
                <v-btn size="large" color="green" flat>
<span style="font-size: 14px;
font-weight: 600;
line-height: 20px;">

    Post
</span>
</v-btn>
            </div>
        </div>
        </v-sheet>
        <p class="text-right" style="color: #969696;
font-size: 14px;
font-weight: 500;
line-height: 24px;
letter-spacing: -0.14px;"><span style="
color: #333;
font-size: 14px;
font-weight: 500;
line-height: 20px;" >NB:</span> Only you and other staff can see comments </p>
        </div>
      </v-timeline-item>


      <v-timeline-item
        class="mb-6"
        hide-dot
      >
        <span style="color:#969696;
font-size: 14px;
font-weight: 500;
line-height: 20px;
letter-spacing: -0.14px;">Today</span>
      </v-timeline-item>

      <v-timeline-item
        class="mb-4"
        dot-color="grey"
        size="x-small"
      >
        <div style="min-width: 40vw;" class="d-flex justify-space-between flex-grow-1">
          <div>
            <p class="timelinetext">
                You sent an invoice to Nweke Franklin  (sylvesterfranklin007@gmail.com)
            </p>
          </div>
          <div class="flex-shrink-0">
           <p style="color:#969696;
font-size: 14px;
font-weight: 500;
line-height: 20px;">

               Just now
            </p>
          </div>
        </div>
      </v-timeline-item>
      <v-timeline-item
        class="mb-4"
        dot-color="grey"
        size="x-small"
      >
        <div style="min-width: 40vw;" class="d-flex justify-space-between flex-grow-1">
          <div>
            <p class="timelinetext">
                You created this draft order            </p>
          </div>
          <div class="flex-shrink-0">
           <p style="color:#969696;
font-size: 14px;
font-weight: 500;
line-height: 20px;">

               Just now
            </p>
          </div>
        </div>
      </v-timeline-item>
      <v-timeline-item
        class=""
        dot-color="grey"
        size="x-small"
      >
        <div style="min-width: 40vw;" class="d-flex justify-space-between flex-grow-1">
          <div>
            <p class="timelinetext">
                Order confirmation email was sent to Nweke Franklin (sylvesterfranklin007@gmail.com)
            </p>          </div>
          <div class="flex-shrink-0">
           <p style="color:#969696;
font-size: 14px;
font-weight: 500;
line-height: 20px;">

               Just now
            </p>
          </div>
        </div>
      </v-timeline-item>

      <v-timeline-item
        class="mb-4"
        hide-dot
      >
     
        <v-btn style="    border: 1px solid #e5e5e5;" size="large" variant="outlined">Resend Email</v-btn>

      </v-timeline-item>

      <v-timeline-item
        class=""
        dot-color="grey"
        size="x-small"
      >
        <div style="min-width: 40vw;" class="d-flex justify-space-between flex-grow-1">
          <div>
            <p class="timelinetext">
                Confirmation #M5QJPMWCC was generated for this order.            </p>          </div>
          <div class="flex-shrink-0">
           <p style="color:#969696;
font-size: 14px;
font-weight: 500;
line-height: 20px;">

               Just now
            </p>
          </div>
        </div>
      </v-timeline-item>

      <v-timeline-item
        class=""
        dot-color="green"
        size="x-small"
      >
        <div style="min-width: 40vw;" class="d-flex justify-space-between flex-grow-1">
          <div>
            <p class="timelinetext">
                You created this order for Nweke Franklin from draft order               </p>          </div>
          <div class="flex-shrink-0">
           <p style="color:#969696;
font-size: 14px;
font-weight: 500;
line-height: 20px;">
               Just now
            </p>
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
                </v-sheet>
            </v-col>
            <v-col cols="12" sm="4">
                <v-sheet class="cardStyle">
                    <div class="d-flex mb-6 mt-2 justify-space-between align-center">
                        <p style="color: #333;
                            font-size: 20px;
                            font-weight: 600;"> Customer
                        </p>
                        <v-btn @click="dialog = true" size="x-small" flat icon="mdi mdi-close-circle-outline" variant="text" color="blue"></v-btn>
                    </div>
                    <v-text-field v-if="false" hide-details="" class="borderedinput w-100 my-4" variant="outlined" prepend-inner-icon="mdi mdi-magnify" placeholder="Search or create a customer" density="compact"  >
     </v-text-field>
           <div class="mb-4 d-flex justify-space-between">
            <v-avatar size="94">
                <v-img src="https://res.cloudinary.com/payhospi/image/upload/v1687702335/rectangle-1939_khvhag.png"></v-img>
            </v-avatar>
            <div>
                <v-icon size="18" class="mb-1" icon="mdi mdi-shopping"></v-icon> 
                <span style="color: #1273EB;
font-size: 14px;
font-weight: 600;
line-height: 26px;">

                    4 Orders
                </span>
            </div>
           </div>

           <p style="color:  #1273EB;

font-size: 14px;
font-weight: 500;
line-height: 20px;">Nweke Franklin Odira</p>

<v-divider class="my-4"></v-divider>
            <div class="d-flex  justify-space-between align-center">
                        <p style="color: #333;
                            font-size: 20px;
                            font-weight: 600;"> Contact Information
                        </p>
                        <v-btn size="x-small" flat variant="text" color="blue"><span 
                        style="color:  #1273EB;
                        font-size: 14px;
                        font-weight: 500;">Edit</span> </v-btn>
                    </div>
                    <div class="mt-4 d-flex justify-space-between">
                        <p style="color: #1273EB;
                            font-size: 14px;
                            font-weight: 500;
                            line-height: 20px;">
                            Sylvesterfranklin@gmail.com
                        </p>
                        <v-btn size="x-small" flat variant="text" icon="mdi mdi-content-copy" color="grey-lighten-1"> </v-btn>
                    </div>
                    <p style="
                    color:  #969696;
                    font-size: 14px;
                    font-weight: 500;">No phone number</p>
                    <v-divider class="mt-4 mb-4"></v-divider>
                    <div class="d-flex  justify-space-between align-center">
                        <p style="color: #333;
                            font-size: 20px;
                            font-weight: 600;"> Shipping Address
                        </p>
                        <v-btn size="x-small" flat variant="text" color="blue"><span 
                        style="color:  #1273EB;
                        font-size: 14px;
                        font-weight: 500;">Edit</span> </v-btn>
                    </div>
                    <div class="mt-4 d-flex justify-space-between">
                        <p style="color: #969696;
                            font-size: 14px;max-width: 180px;
                            font-weight: 500;
                            line-height: 20px;">
                          Michael Johnson
                        Michael’s Corp LLC
                        Rose Str. 120
                        New York, PH 10000
                        United States (US)
                        </p>
                        <v-btn size="x-small" flat variant="text" icon="mdi mdi-content-copy" color="grey-lighten-1"> </v-btn>
                    </div>

                    <v-btn variant="text" flat class="px-0 mt-2" size="x-small">
                    <span style="color:  #1273EB;
font-size: 14px;
font-weight: 600;
line-height: 140%;
text-decoration-line: underline;">

                        View Map 
                    </span>
                    </v-btn>

<v-divider class="my-4"></v-divider>
            <div class="d-flex  justify-space-between align-center">
                        <p style="color: #333;
                            font-size: 20px;
                            font-weight: 600;"> Billing Address
                        </p>
                        <v-btn size="x-small" flat variant="text" color="blue"><span 
                        style="color:  #1273EB;
                        font-size: 14px;
                        font-weight: 500;">Edit</span> </v-btn>
                    </div>
                  
                    <p class="mt-4" style="
                    color:  #969696;
                    font-size: 14px;
                    font-weight: 500;">Same as shipping address</p>
                </v-sheet>
                <v-sheet class="cardStyle mt-4">
                    <div class="d-flex mb-6 mt-2 justify-space-between align-center">

                        <p style="color: #333;
font-size: 20px;
font-weight: 600;"> Notes
                        </p>
                        <v-btn icon="mdi mdi-plus" variant="outlined" size="small" style="    border: 1px solid #e5e5e5;" class=" rounded-xl"></v-btn>
                    </div>
                    <v-text-field hide-details="" class="borderedinput w-100 mt-4" variant="outlined"  placeholder="Start writing" density="compact"  >
     </v-text-field>
           
                </v-sheet>
                <v-sheet class="cardStyle mt-4">
                    <div class="d-flex mb-6 mt-2 justify-space-between align-center">

                        <p style="color: #333;
font-size: 20px;
font-weight: 600;"> Tags
                        </p>
                        <v-btn variant="text" size="small"  color="#1273EB">View all tags</v-btn>
                    </div>
                    <v-text-field hide-details="" class="borderedinput w-100 mt-4" variant="outlined"  placeholder="Find or create tags" density="compact"  >
     </v-text-field>
           
                </v-sheet>
           
              
            </v-col>
        </v-row>
        <v-divider class="my-8"></v-divider>
        <div class="d-flex justify-end">
            <v-btn size="large" color="green" flat>
<span style="font-size: 14px;
font-weight: 600;
line-height: 20px;">

    Save Draft Order
</span>
</v-btn>
        </div>
<v-dialog   width="auto" v-model="dialog">
    <v-sheet width="100vw" max-width="669px" class="cardStyle px-0">
<div class="px-6 d-flex justify-space-between">
    <div class="d-flex align-center">

        <v-avatar  size="70" color="#EDEDED"><v-icon icon="mdi mdi-account-plus"></v-icon></v-avatar>
        <div class="mx-4">
            <p style="color:#333;
font-size: 24px;
font-weight: 600;
line-height: 20px;
letter-spacing: -0.24px;">Add New Customer</p>
    <p style="color: #969696;
font-size: 16px;
font-weight: 500;
line-height: 20px;
letter-spacing: -0.16px;" class="mt-2">Add New Customers to your lists</p>
</div>
</div>
<v-icon @click="dialog = false" icon="mdi mdi-close-circle-outline" color="#1273EB"></v-icon>
</div>
<v-divider class="my-4"></v-divider>
<div class="px-2">

    <v-breadcrumbs @click="window = 'ship'" style="color: var(--magnetic-green-4, #2C6E63);
font-size: 14px;
font-weight: 600;
line-height: 20px;
letter-spacing: -0.14px;" density="compact" class="my-2 " color="green" :items="['Basic Information', 'Shipping Details']">
        <template v-slot:divider>
            <v-icon icon="mdi mdi-chevron-right"></v-icon>
        </template>
    </v-breadcrumbs>
</div>
<v-divider></v-divider>
 <v-window
    v-model="window"
    :show-arrows="false"
  >
<v-window-item value="basic">


            <div class="px-7 pt-6">
            <p style="color: #333;
font-size: 14px;
font-weight: 500;
line-height: 20px;">Upload customer profile picture</p>
<v-row class="pt-4 align-center pl-2 d-flex">

        <v-avatar size="70" color="#EDF0EF"><v-icon icon="mdi mdi-image-outline"></v-icon></v-avatar>

    <v-col >
        <div class="d-flex justify-center align-center pa-4 rounded-lg"
                                style="height: ;width: 100%;border: 3.4px dashed #e1e1e1 ;">
                                    <p class="text-center ma-auto" style="text-align: center;
font-size: 12px;
font-weight: 600;max-width: 260px;">
       <span style="color: #1273EB;">
           Click to upload

       </span> 
       or drag and drop
        SVG, PNF, JPG, or GIF (max 800X400px)
    </p>
</div>

    </v-col>
</v-row>
                        <v-row class="mt-3">
                 <v-col> 
        <p class="inputLabel">First Name</p>             
     <v-text-field placeholder="Enter first name" density="comfortable"  >
         </v-text-field></v-col>
                 <v-col> 
                     <p class="inputLabel">Last Name</p>             
            
     <v-text-field placeholder="Enter last name" density="comfortable"  >
         </v-text-field></v-col>
         </v-row> 
                        <p class="inputLabel">Language</p>             
     <v-select persistent-hint hint="This customer will receive notification in this language" append-inner-icon="mdi mdi-chevron-down"  placeholder="English (Default)" density="comfortable"  >
         </v-select>
                        <p class="inputLabel mt-5">Gender</p>             
     <v-select  append-inner-icon="mdi mdi-chevron-down"  placeholder="Select Gender" density="comfortable"  >
         </v-select>
              
       
</div>
         <div class="px-5">

         <p class="inputLabel">Email</p>             
     <v-text-field placeholder="Enter customer email address" density="comfortable"  >
         </v-text-field>
         <v-checkbox  hide-details density="compact" color="#00966D">
      <template v-slot:label>
        <div style="color: #333;
font-size: 14px;
font-weight: 500;
line-height: 20px;" class="ml-2 font-weight-medium">
     Customer accepts email marketing

        </div>
      </template>
    </v-checkbox>    <v-checkbox  hide-details density="compact" color="#00966D">
      <template v-slot:label>
        <div style="color: #333;
font-size: 14px;
font-weight: 500;
line-height: 20px;" class="ml-2 font-weight-medium">
    Customer is tax exempt

        </div>
      </template>
    </v-checkbox> 
    
    <div class="py-8">
        <v-row>
            <v-col cols="6"><v-btn size="large"
                 style="    border: 1px solid #e5e5e5;" flat block>
                <span style="color:  #333;
font-size: 14px;
font-weight: 600;
line-height: 20px;" >
                Cancel</span></v-btn></v-col>
            <v-col cols="6">
                <v-btn size="large" color="green" flat block> 
                <span style="color: #EDF0EF;
                        font-size: 14px;
                        font-weight: 600;
                        line-height: 20px;">
                        Save and Proceed
            </span></v-btn></v-col>
        </v-row>
    </div>
         </div> 
        </v-window-item>
        <v-window-item value="ship">
            <div class="px-7 pt-6">
                <p class="inputLabel">Country/region</p>             
     <v-select append-inner-icon="mdi mdi-chevron-down"  placeholder="Country/region" density="comfortable"  >
         </v-select>
                    
        <p class="inputLabel">Company</p>             
     <v-text-field placeholder="Company" density="comfortable"  >
         </v-text-field>
                     <p class="inputLabel">Address</p>             
            
     <v-text-field placeholder="Enter customer address" density="comfortable"  >
         </v-text-field>      <p class="inputLabel">Apartment, suite, etc</p>             
     <v-select persistent-hint hint="This customer will receive notification in this language" append-inner-icon="mdi mdi-chevron-down"  placeholder="English (Default)" density="comfortable"  >
         </v-select>
                        
</div>
         <div class="px-5">
            <v-row class="mt-3">
                 <v-col> 
        <p class="inputLabel">City</p>             
     <v-text-field placeholder="Enter city" density="comfortable"  >
         </v-text-field></v-col>
                 <v-col> 
                     <p class="inputLabel">State</p>             
                     <v-select append-inner-icon="mdi mdi-chevron-down"  placeholder="Select State" density="comfortable"  >
         </v-select>
        </v-col>
                 <v-col> 
                     <p class="inputLabel">Zipcode</p>             
            
     <v-text-field placeholder="Enter last name" density="comfortable"  >
         </v-text-field></v-col>
         </v-row> 
    
         <p class="inputLabel">Phone</p>             
     <v-text-field append-inner-icon="mdi mdi-phone" placeholder="NG" density="comfortable"  >
         </v-text-field>

    
    <div class="py-8">
        <v-row>
            <v-col cols="6"><v-btn size="large"
                 style="    border: 1px solid #e5e5e5;" flat block>
                <span style="color:  #333;
font-size: 14px;
font-weight: 600;
line-height: 20px;" >
                Cancel</span></v-btn></v-col>
            <v-col cols="6">
                <v-btn size="large" color="green" flat block> 
                <span style="color: #EDF0EF;
                        font-size: 14px;
                        font-weight: 600;
                        line-height: 20px;">
                        Save and Proceed
            </span></v-btn></v-col>
        </v-row>
    </div>
         </div> 
</v-window-item>
           </v-window>

    </v-sheet>
</v-dialog>
    </v-container>
</template>
<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'

export default {
    components: {
        EditorContent,
    },
    data() {
        return {
            tags:['Fashion', 'Sneakers', 'Unisex shoes', 'Men shoes', 'Black', 'Fashion and style', 'Ghana Ankara Material'],
            checkqty: true,
            window: 'basic',
            radioship:true,
            dialog:true,
            editor: null,
            tab: 'Customer Details',
            chip: 'All',
            chosen: '',
            notes: [{
                name: 'Benjamin Franklin O.',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1687265847/Rectangle_1929_qzdwmq.png'
            },
            {
                name: 'Nweke Franklin',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1687265844/Rectangle_1929_1_x8i5ic.png'
            },
            {
                name: 'Nweke Franklin',
                image: 'https://res.cloudinary.com/payhospi/image/upload/v1687265844/Rectangle_1929_1_x8i5ic.png'
            },

            ],
            summary: [
                {
                    title: 'Total Quantity',
                    value: '4 Items'
                },
                {
                    title: 'Grand Total',
                    value: '€ 1,829.00'
                }, {
                    title: 'Sub-Total',
                    value: '€ 1,817.00'
                },
                {
                    title: 'Shipping International',
                    value: '€ 12.00'
                },
                {
                    title: 'Taxes',
                    value: '€ 0.00'
                }
            ],
            items: [
                {
                    sn: '#23942',
                    name: 'Leather crop top & pants......',
                    date: '17 May',
                    total: '€2,349‎',
                },
                {
                    sn: '#23442',
                    name: 'Leather crop top & pants......',
                    date: '17 May',
                    total: '€2,349‎',
                },
                {
                    sn: '#26042',
                    name: 'Leather crop top & pants......',
                    date: '17 May',
                    total: '€2,349‎',
                },


            ],
        }
    },
    computed: {
        orderDetails() {
            return [
                {
                    title: 'Name',
                    value: 'Benjamin Franklin O.'
                },
                {
                    title: 'Email',
                    value: 'sylvesterfranklin007@gmail.com'
                },
                {
                    title: 'Phone',
                    value: '+145789900'
                },
                {
                    title: 'Billing',
                    value: 'Michael Johnson, Michael’s Corp LLC Rose Str. 120 New York, PH 10000 United States (US)'
                },
                {
                    title: 'Shipping',
                    value: 'Michael Johnson, Michael’s Corp LLC Rose Str. 120 New York, PH 10000 United States (US)'
                },
                {
                    title: 'Shipping Company',
                    value: 'Umoja Free Shipping',
                    img: 'https://res.cloudinary.com/dkbt6at26/image/upload/v1684229324/Frame_4_emeelq.png'
                },
            ]
        }
    },
    mounted() {
        this.items = this.items1;

        this.editor = new Editor({
            extensions: [
                StarterKit,
                Link,
                Underline,
                TextAlign.configure({
                    types: ['heading', 'paragraph'],
                }),
            ],
            content: '<p>This sneakers is made from one of the best  ankara material in Ghana</p>',
        })
    },
    beforeUnmount() {
        this.editor.destroy()
    },
}
</script>