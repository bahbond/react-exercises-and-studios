export default function BookList() {
   let pageTitle = "Reading. It Works";
   let book1 = "https://i5.walmartimages.com/asr/ad2188a9-0f80-4751-a4a6-6178081ba6ab.77555df837b5cefa93ef69148b17bec7.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF";
   let book2 = "https://th.bing.com/th/id/OIP.UsWXbawgx_dcK4XnchQe0AHaLF?w=204&h=305&c=7&r=0&o=5&dpr=1.1&pid=1.7";
   let book3 = "https://th.bing.com/th/id/OIP.kM3KOYIzmcQsqiyYyg9fyAAAAA?pid=ImgDet&w=360&h=541&rs=1";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="A Prayer for Owen Meany" />
         <img src={book2} alt="The Sun Also Rises" />
         <img src={book3} alt="Lonesome Dove" />
      </div>      
   );
}