import PhotoCard from "./PhotoCard";

export default function ImageGallery() {
  const images = [
    {
      url:
        "https://th-thumbnailer.cdn-si-edu.com/CbddkFFO3OB80rRz83Iiuf-Z0FY=/1000x750/filters:no_upscale():focal(1471x1061:1472x1062)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg",
      title: "Taj Mahal"
    },
    {
      url:
        "https://www.worldatlas.com/r/w1200/upload/be/cb/99/great-wall-of-china.jpg",
      title: "Great Wall of China"
    },
    {
      url:
        "https://static.onecms.io/wp-content/uploads/sites/28/2016/09/machu-PICCHU0916-2000.jpg",
      title: "Machu Picchu"
    },
    {
      url:
        "https://www.colemanconcierge.com/wp-content/uploads/2020/02/Chichen-Itza-El-Castillo-1280x640.jpg",
      title: "Chichen Itza"
    }
  ];

  return (
    <div className="gallery">
      {images.map((img) => (
        <PhotoCard url={img.url} title={img.title} />
      ))}
    </div>
  );
}
