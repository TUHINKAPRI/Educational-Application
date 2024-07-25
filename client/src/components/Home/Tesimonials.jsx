
import Carousels from "../common/Carousels";

function Tesimonials() {
  const data = [
    {
      name: "Tuhin Kapri",
      profilePicture: "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721779200&semt=ais_user",
      rating: "5",
      comment:
        "Selamat datang di Kursus Daring Kemdikbudristek! Tingkatkan Skill dan keahlian Anda dengan mendaftar dan mengikuti beragam kursus daring yang diselengarakan LKP. Belajar mandiri.Kursus atau biasa dipanggil (LKP) Lembaga Kursus dan Pelatihan",

    },
    {
      name: "Tuhin Kapri",
     profilePicture: "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721779200&semt=ais_user",
      rating: "4",
      comment:
        "Selamat datang di Kursus Daring Kemdikbudristek! Tingkatkan Skill dan keahlian Anda dengan mendaftar dan mengikuti beragam kursus daring yang diselengarakan LKP. Belajar mandiri.Kursus atau biasa dipanggil (LKP) Lembaga Kursus dan Pelatihan",
    },
    {
      name: "Tuhin Kapri",
      profilePicture: "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721779200&semt=ais_user",
      rating: "1",
      comment:
        "Selamat datang di Kursus Daring Kemdikbudristek! Tingkatkan Skill dan keahlian Anda dengan mendaftar dan mengikuti beragam kursus daring yang diselengarakan LKP. Belajar mandiri.Kursus atau biasa dipanggil (LKP) Lembaga Kursus dan Pelatihan",
    },
    {
      name: "Tuhin Kapri",
      profilePicture: "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721779200&semt=ais_user",
      rating: "2",
      comment:
        "Selamat datang di Kursus Daring Kemdikbudristek! Tingkatkan Skill dan keahlian Anda dengan mendaftar dan mengikuti beragam kursus daring yang diselengarakan LKP. Belajar mandiri.Kursus atau biasa dipanggil (LKP) Lembaga Kursus dan Pelatihan",
    },
    {
      name: "Tuhin Kapri",
     profilePicture: "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721779200&semt=ais_user",
      rating: "4",
      comment:
        "Selamat datang di Kursus Daring Kemdikbudristek! Tingkatkan Skill dan keahlian Anda dengan mendaftar dan mengikuti beragam kursus daring yang diselengarakan LKP. Belajar mandiri.Kursus atau biasa dipanggil (LKP) Lembaga Kursus dan Pelatihan",
    },
  ];
  return (
    <div className="container mt-16">
      <div className="text-center">
        <h1 className="title-font sm:text-[16px] text-[20px] mb-4 font-semibold text-[#C67336]">
          OUR TESTIMONIALS
        </h1>
        <p className="mb-8 font-semibold text-[30px] leading-relaxed">
          What Our Student Say About US
        </p>
      </div>
      <div>
        <Carousels
          autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={true}
          data={data}
        />
      </div>
    </div>
  );
}

export default Tesimonials;
