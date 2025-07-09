const mongoose = require('mongoose');
const News = require('./models/news');

const MONGO_URI = 'mongodb://localhost:27017/webslandx';

mongoose.connect(MONGO_URI).then(async () => {
  await News.deleteMany({});
  await News.insertMany([
    {
      _id: new mongoose.Types.ObjectId('65d1d6a7e0c4a4e1a0b3c2d1'),
      title: "Nguồn cung căn hộ sơ cấp Hà Nội tiếp tục được bổ sung",
      description: "Thị trường căn hộ sơ cấp Hà Nội đang ghi nhận sự gia tăng về nguồn cung với nhiều dự án mới được mở bán. Các chủ đầu tư đang đẩy mạnh việc ra mắt sản phẩm mới để đáp ứng nhu cầu của thị trường.",
      image: "https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg",
      source: "batdongsan.com.vn",
      date: new Date().toISOString(),
      category: "Thị trường",
      url: "https://batdongsan.com.vn/tin-tuc/nguon-cung-can-ho-so-cap-ha-noi-tiep-tuc-duoc-bo-sung-cd-hn-837414",
      isFeatured: true
    },
    {
      _id: new mongoose.Types.ObjectId('65d1d6a7e0c4a4e1a0b3c2d2'),
      title: "Giá nhà đất TP.HCM tăng mạnh quý 1/2024",
      description: "Giá nhà đất tại TP.HCM tiếp tục tăng mạnh trong quý 1/2024, đặc biệt là tại các khu vực ven trung tâm. Nhiều chuyên gia dự báo xu hướng này sẽ tiếp tục trong thời gian tới.",
      image: "https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-a7a8_wm.jpg",
      source: "batdongsan.com.vn",
      date: new Date(Date.now() - 86400000 * 2).toISOString(),
      category: "BĐS TP.HCM",
      url: "https://batdongsan.com.vn/tphcm-tang-gia",
      isFeatured: true
    },
    {
      _id: new mongoose.Types.ObjectId('65d1d6a7e0c4a4e1a0b3c2d3'),
      title: "Chính sách mới về thuế BĐS",
      description: "Bộ Tài chính vừa ban hành thông tư mới về thuế BĐS với nhiều thay đổi quan trọng, tác động trực tiếp đến thị trường bất động sản trong nước.",
      image: "https://file4.batdongsan.com.vn/2025/06/09/20250609160951-6a1c_wm.jpg",
      source: "batdongsan.com.vn",
      date: new Date(Date.now() - 86400000 * 3).toISOString(),
      category: "Chính sách",
      url: "https://batdongsan.com.vn/chinh-sach-moi-bds",
      isFeatured: true
    },
    {
      _id: new mongoose.Types.ObjectId('65d1d6a7e0c4a4e1a0b3c2d4'),
      title: "Dự án mới tại quận 9: Cơ hội đầu tư",
      description: "Dự án mới tại quận 9 với quy mô 50ha đang thu hút sự quan tâm của các nhà đầu tư. Dự án được kỳ vọng sẽ tạo ra một khu đô thị hiện đại, đáp ứng nhu cầu nhà ở của người dân.",
      image: "https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg",
      source: "batdongsan.com.vn",
      date: new Date(Date.now() - 86400000 * 4).toISOString(),
      category: "Dự án",
      url: "https://batdongsan.com.vn/du-an-moi-quan-9",
      isFeatured: false
    },
    {
      _id: new mongoose.Types.ObjectId('65d1d6a7e0c4a4e1a0b3c2d5'),
      title: "Xu hướng mua nhà của giới trẻ 2024",
      description: "Giới trẻ đang có xu hướng chuyển sang mua nhà tại các khu vực ven đô thị, nơi có giá cả phù hợp và môi trường sống tốt. Đây là một trong những động lực thúc đẩy thị trường BĐS phát triển.",
      image: "https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-a7a8_wm.jpg",
      source: "batdongsan.com.vn",
      date: new Date(Date.now() - 86400000 * 5).toISOString(),
      category: "Xu hướng",
      url: "https://batdongsan.com.vn/xu-huong-mua-nha-2024",
      isFeatured: false
    },
    {
      _id: new mongoose.Types.ObjectId('65d1d6a7e0c4a4e1a0b3c2d6'),
      title: "BĐS Hà Nội: Nhiều dự án mới ra mắt",
      description: "Thị trường BĐS Hà Nội sôi động với nhiều dự án mới được công bố trong tháng 3/2024. Các dự án tập trung chủ yếu vào phân khúc căn hộ cao cấp và nhà phố thương mại.",
      image: "https://file4.batdongsan.com.vn/2025/06/09/20250609160951-6a1c_wm.jpg",
      source: "batdongsan.com.vn",
      date: new Date(Date.now() - 86400000 * 6).toISOString(),
      category: "BĐS Hà Nội",
      url: "https://batdongsan.com.vn/ha-noi-du-an-moi",
      isFeatured: true
    },
    {
      _id: new mongoose.Types.ObjectId('65d1d6a7e0c4a4e1a0b3c2d7'),
      title: "Phân tích thị trường BĐS công nghiệp",
      description: "BĐS công nghiệp tiếp tục là điểm sáng thu hút vốn đầu tư FDI. Các khu công nghiệp mới được quy hoạch đang tạo ra nhiều cơ hội cho nhà đầu tư.",
      image: "https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg",
      source: "batdongsan.com.vn",
      date: new Date(Date.now() - 86400000 * 7).toISOString(),
      category: "Phân tích",
      url: "https://batdongsan.com.vn/phan-tich-bds-cong-nghiep",
      isFeatured: false
    },
    {
      _id: new mongoose.Types.ObjectId('65d1d6a7e0c4a4e1a0b3c2d8'),
      title: "BĐS nghỉ dưỡng phục hồi sau dịch",
      description: "Phân khúc BĐS nghỉ dưỡng ghi nhận sự phục hồi mạnh mẽ sau đại dịch Covid-19. Nhiều dự án mới được triển khai tại các địa điểm du lịch nổi tiếng.",
      image: "https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-a7a8_wm.jpg",
      source: "batdongsan.com.vn",
      date: new Date(Date.now() - 86400000 * 8).toISOString(),
      category: "Nghỉ dưỡng",
      url: "https://batdongsan.com.vn/bds-nghi-duong-phuc-hoi",
      isFeatured: false
    },
    {
      _id: new mongoose.Types.ObjectId('65d1d6a7e0c4a4e1a0b3c2d9'),
      title: "Hưng Yên sắp nhập với tỉnh nào?",
      description: "Thông tin mới nhất về việc tỉnh Hưng Yên có thể sáp nhập với tỉnh thành nào, ảnh hưởng đến quy hoạch và phát triển bất động sản khu vực.",
      image: "https://img.iproperty.com.my/angel/750x1000-fit/wp-content/uploads/sites/7/2025/06/ban-do-tinh-hung-yen-sau-sap-nhap-1.jpg",
      source: "batdongsan.com.vn",
      date: new Date(Date.now() - 86400000 * 9).toISOString(),
      category: "Quy hoạch",
      url: "https://batdongsan.com.vn/wiki/hung-yen-sap-nhap-voi-tinh-nao-837804",
      isFeatured: false,
      views: 250
    },
    {
      _id: new mongoose.Types.ObjectId('65d1d6a7e0c4a4e1a0b3c2da'),
      title: "Bản đồ tỉnh Hưng Yên sau sáp nhập",
      description: "Cập nhật bản đồ hành chính mới của tỉnh Hưng Yên sau khi có thông tin sáp nhập, ảnh hưởng đến quy hoạch đô thị và giá trị bất động sản.",
      image: "https://img.iproperty.com.my/angel/750x1000-fit/wp-content/uploads/sites/7/2025/06/tinh-hung-yen.jpg",
      source: "batdongsan.com.vn",
      date: new Date(Date.now() - 86400000 * 10).toISOString(),
      category: "Quy hoạch",
      url: "https://batdongsan.com.vn/wiki/hung-yen-sau-sap-nhap",
      isFeatured: false,
      views: 200
    },
    {
      _id: new mongoose.Types.ObjectId('65d1d6a7e0c4a4e1a0b3c2db'),
      title: "Tổng quan về tỉnh Hưng Yên",
      description: "Cái nhìn tổng quan về vị trí địa lý, kinh tế, xã hội và tiềm năng phát triển bất động sản của tỉnh Hưng Yên.",
      image: "https://img.iproperty.com.my/angel/750x1000-fit/wp-content/uploads/sites/7/2025/06/tinh-thai-binh.jpg",
      source: "batdongsan.com.vn",
      date: new Date(Date.now() - 86400000 * 11).toISOString(),
      category: "Tổng quan",
      url: "https://batdongsan.com.vn/wiki/tong-quan-hung-yen",
      isFeatured: false,
      views: 180
    }
  ]);
  console.log('Seed news done!');
  process.exit();
});
