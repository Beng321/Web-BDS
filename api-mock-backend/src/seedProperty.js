const mongoose = require('mongoose');
const Property = require('./models/property');
const User = require('./models/user');

const MONGO_URI = 'mongodb://localhost:27017/webslandx';

(async () => {
  await mongoose.connect(MONGO_URI);

  // Xóa dữ liệu cũ
  await Property.deleteMany({});
  await User.deleteMany({});

  // Tạo 5 user mẫu
  const users = await User.insertMany([
    { username: 'ngavo', email: 'nga.vo@example.com', password: '123456', role: 'user' },
    { username: 'minhtran', email: 'minh.tran@example.com', password: '123456', role: 'user' },
    { username: 'hoangnguyen', email: 'hoang.nguyen@example.com', password: '123456', role: 'user' },
    { username: 'linhpham', email: 'linh.pham@example.com', password: '123456', role: 'user' },
    { username: 'tuanle', email: 'tuan.le@example.com', password: '123456', role: 'user' },
  ]);

  // Lấy userId cho từng user
  const [user1, user2, user3, user4, user5] = users;

  // Gán userId cho các property đầu tiên (mỗi user có ít nhất 2 property)
  await Property.insertMany([
    {
      id: 1,
      title: 'Bán đất tại 155 triệu/m2, 74m2, giá ưu đãi',
      description: 'Khu đô thị mới Tây Đô - Dân Phương - Hà Nội\n\n- Vị trí: Đường Quốc lộ 32, Xã Tân Lập, Huyện Đan Phượng, Hà Nội\n- Diện tích: 74m2\n- Giá: 155 triệu/m2\n- Hướng: Đông Nam\n- Pháp lý: Sổ đỏ chính chủ\n- Tiện ích: Gần trường học, bệnh viện, chợ, siêu thị\n- Giao thông: Thuận tiện, gần đường Quốc lộ 32\n- Tiềm năng: Khu vực đang phát triển, giá trị tăng cao',
      price: 11470000000,
      area: 74,
      bedrooms: 0,
      bathrooms: 0,
      category: 'Bán Đất',
      location: {
        street: 'Đường Quốc lộ 32',
        province: {
          code: 1,
          name: 'Hà Nội',
          name_with_type: 'Thành phố Hà Nội',
          slug: 'ha-noi',
          type: 'thanh-pho',
          name_with_type_slug: 'thanh-pho-ha-noi'
        },
        district: {
          code: 1,
          name: 'Đan Phượng',
          name_with_type: 'Huyện Đan Phượng',
          slug: 'dan-phuong',
          type: 'huyen',
          name_with_type_slug: 'huyen-dan-phuong',
          path: '1',
          path_with_type: 'Thành phố Hà Nội, Huyện Đan Phượng',
          parent_code: 1
        },
        ward: {
          code: 1,
          name: 'Tân Lập',
          name_with_type: 'Xã Tân Lập',
          slug: 'tan-lap',
          type: 'xa',
          name_with_type_slug: 'xa-tan-lap',
          path: '1,1',
          path_with_type: 'Thành phố Hà Nội, Huyện Đan Phượng, Xã Tân Lập',
          parent_code: 1
        }
      },
      image: 'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg',
      images: [
        'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg',
        'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-a7a8_wm.jpg',
        'https://file4.batdongsan.com.vn/2025/06/09/20250609160951-6a1c_wm.jpg'
      ],
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
      verified: true,
      proAgent: true,
      type: 'ban',
      status: 'active',
      userId: user1._id
    },
    {
      id: 2,
      title: 'Bán xây căn hộ dịch vụ tại KĐT Tây Đô - Đan Phượng - HN',
      description: 'Khu đô thị mới Tây Đô - Dân Phương - Hà Nội\n\n- Vị trí: Đường Quốc lộ 32, Xã Tân Lập, Huyện Đan Phượng, Hà Nội\n- Diện tích: 100m2\n- Giá: Thỏa thuận\n- Hướng: Đông Nam\n- Pháp lý: Sổ đỏ chính chủ\n- Tiện ích: Gần trường học, bệnh viện, chợ, siêu thị\n- Giao thông: Thuận tiện, gần đường Quốc lộ 32\n- Tiềm năng: Khu vực đang phát triển, giá trị tăng cao\n- Đặc điểm: Đất xây căn hộ dịch vụ, tiềm năng sinh lời cao',
      price: 15000000000,
      area: 100,
      bedrooms: 0,
      bathrooms: 0,
      category: 'Bán Đất',
      location: {
        street: 'Đường Quốc lộ 32',
        province: {
          code: 1,
          name: 'Hà Nội',
          name_with_type: 'Thành phố Hà Nội',
          slug: 'ha-noi',
          type: 'thanh-pho',
          name_with_type_slug: 'thanh-pho-ha-noi'
        },
        district: {
          code: 1,
          name: 'Đan Phượng',
          name_with_type: 'Huyện Đan Phượng',
          slug: 'dan-phuong',
          type: 'huyen',
          name_with_type_slug: 'huyen-dan-phuong',
          path: '1',
          path_with_type: 'Thành phố Hà Nội, Huyện Đan Phượng',
          parent_code: 1
        },
        ward: {
          code: 1,
          name: 'Tân Lập',
          name_with_type: 'Xã Tân Lập',
          slug: 'tan-lap',
          type: 'xa',
          name_with_type_slug: 'xa-tan-lap',
          path: '1,1',
          path_with_type: 'Thành phố Hà Nội, Huyện Đan Phượng, Xã Tân Lập',
          parent_code: 1
        }
      },
      image: 'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg',
      images: [
        'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg',
        'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-a7a8_wm.jpg',
        'https://file4.batdongsan.com.vn/2025/06/09/20250609160951-6a1c_wm.jpg'
      ],
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
      verified: true,
      proAgent: true,
      type: 'ban',
      status: 'active',
      userId: user1._id
    },
    {
      id: 3,
      title: 'Bán đất nền KĐT Tây Đô - Đan Phượng - Hà Nội',
      description: 'Khu đô thị mới Tây Đô - Dân Phương - Hà Nội\n\n- Vị trí: Đường Quốc lộ 32, Xã Tân Lập, Huyện Đan Phượng, Hà Nội\n- Diện tích: 120m2\n- Giá: 160 triệu/m2\n- Hướng: Đông Bắc\n- Pháp lý: Sổ đỏ chính chủ\n- Tiện ích: Gần trường học, bệnh viện, chợ, siêu thị\n- Giao thông: Thuận tiện, gần đường Quốc lộ 32\n- Tiềm năng: Khu vực đang phát triển, giá trị tăng cao',
      price: 19200000000,
      area: 120,
      bedrooms: 0,
      bathrooms: 0,
      category: 'Bán Đất',
      location: {
        street: 'Đường Quốc lộ 32',
        province: {
          code: 1,
          name: 'Hà Nội',
          name_with_type: 'Thành phố Hà Nội',
          slug: 'ha-noi',
          type: 'thanh-pho',
          name_with_type_slug: 'thanh-pho-ha-noi'
        },
        district: {
          code: 1,
          name: 'Đan Phượng',
          name_with_type: 'Huyện Đan Phượng',
          slug: 'dan-phuong',
          type: 'huyen',
          name_with_type_slug: 'huyen-dan-phuong',
          path: '1',
          path_with_type: 'Thành phố Hà Nội, Huyện Đan Phượng',
          parent_code: 1
        },
        ward: {
          code: 1,
          name: 'Tân Lập',
          name_with_type: 'Xã Tân Lập',
          slug: 'tan-lap',
          type: 'xa',
          name_with_type_slug: 'xa-tan-lap',
          path: '1,1',
          path_with_type: 'Thành phố Hà Nội, Huyện Đan Phượng, Xã Tân Lập',
          parent_code: 1
        }
      },
      image: 'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg',
      images: [
        'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg',
        'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-a7a8_wm.jpg',
        'https://file4.batdongsan.com.vn/2025/06/09/20250609160951-6a1c_wm.jpg'
      ],
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
      verified: true,
      proAgent: true,
      type: 'ban',
      status: 'active',
      userId: user2._id
    },
    {
      id: 4,
      title: 'Nhà 2 tầng Cầu Giấy, Hà Nội',
      description: 'Nhà 2 tầng mới xây, thiết kế hiện đại, nội thất cao cấp',
      price: 2500000000,
      area: 120,
      bedrooms: 4,
      bathrooms: 3,
      category: 'Bán Nhà',
      location: {
        street: 'Đường Xuân Thủy',
        province: {
          code: 1,
          name: 'Hà Nội',
          name_with_type: 'Thành phố Hà Nội',
          slug: 'ha-noi',
          type: 'thanh-pho',
          name_with_type_slug: 'thanh-pho-ha-noi'
        },
        district: {
          code: 1,
          name: 'Cầu Giấy',
          name_with_type: 'Quận Cầu Giấy',
          slug: 'cau-giay',
          type: 'quan',
          name_with_type_slug: 'quan-cau-giay',
          path: '1',
          path_with_type: 'Thành phố Hà Nội, Quận Cầu Giấy',
          parent_code: 1
        },
        ward: {
          code: 1,
          name: 'Dịch Vọng',
          name_with_type: 'Phường Dịch Vọng',
          slug: 'dich-vong',
          type: 'phuong',
          name_with_type_slug: 'phuong-dich-vong',
          path: '1,1',
          path_with_type: 'Thành phố Hà Nội, Quận Cầu Giấy, Phường Dịch Vọng',
          parent_code: 1
        }
      },
      image: 'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg',
      images: [
        'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg',
        'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-a7a8_wm.jpg',
        'https://file4.batdongsan.com.vn/2025/06/09/20250609160951-6a1c_wm.jpg'
      ],
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
      verified: true,
      proAgent: true,
      type: 'ban',
      status: 'active',
      userId: user2._id
    },
    {
      id: 5,
      title: 'Bán nhà mặt phố Trần Duy Hưng',
      description: 'Nhà 3 tầng mới xây, thiết kế hiện đại, nội thất cao cấp',
      price: 1800000000,
      area: 150,
      bedrooms: 5,
      bathrooms: 3,
      category: 'Bán Nhà',
      location: {
        street: 'Đường Lạch Tray',
        province: {
          code: 31,
          name: 'Hải Phòng',
          name_with_type: 'Thành phố Hải Phòng',
          slug: 'hai-phong',
          type: 'thanh-pho',
          name_with_type_slug: 'thanh-pho-hai-phong'
        },
        district: {
          code: 1,
          name: 'Hồng Bàng',
          name_with_type: 'Quận Hồng Bàng',
          slug: 'hong-bang',
          type: 'quan',
          name_with_type_slug: 'quan-hong-bang',
          path: '31',
          path_with_type: 'Thành phố Hải Phòng, Quận Hồng Bàng',
          parent_code: 31
        },
        ward: {
          code: 1,
          name: 'Hoàng Văn Thụ',
          name_with_type: 'Phường Hoàng Văn Thụ',
          slug: 'hoang-van-thu',
          type: 'phuong',
          name_with_type_slug: 'phuong-hoang-van-thu',
          path: '31,1',
          path_with_type: 'Thành phố Hải Phòng, Quận Hồng Bàng, Phường Hoàng Văn Thụ',
          parent_code: 1
        }
      },
      image: 'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg',
      images: ['https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg'],
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
      verified: true,
      proAgent: true,
      type: 'ban',
      status: 'active',
      userId: user3._id
    },
    {
      id: 6,
      title: 'Bán biệt thự Vinhomes Riverside',
      description: 'Biệt thự view biển, thiết kế sang trọng, tiện nghi cao cấp',
      price: 8500000000,
      area: 250,
      bedrooms: 5,
      bathrooms: 4,
      category: 'Bán Biệt thự',
      location: {
        street: 'Đường Trần Phú',
        province: {
          code: 56,
          name: 'Khánh Hòa',
          name_with_type: 'Tỉnh Khánh Hòa',
          slug: 'khanh-hoa',
          type: 'tinh',
          name_with_type_slug: 'tinh-khanh-hoa'
        },
        district: {
          code: 1,
          name: 'Nha Trang',
          name_with_type: 'Thành phố Nha Trang',
          slug: 'nha-trang',
          type: 'thanh-pho',
          name_with_type_slug: 'thanh-pho-nha-trang',
          path: '56',
          path_with_type: 'Tỉnh Khánh Hòa, Thành phố Nha Trang',
          parent_code: 56
        },
        ward: {
          code: 1,
          name: 'Lộc Thọ',
          name_with_type: 'Phường Lộc Thọ',
          slug: 'loc-tho',
          type: 'phuong',
          name_with_type_slug: 'phuong-loc-tho',
          path: '56,1',
          path_with_type: 'Tỉnh Khánh Hòa, Thành phố Nha Trang, Phường Lộc Thọ',
          parent_code: 1
        }
      },
      image: 'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg',
      images: [
        'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg',
        'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-a7a8_wm.jpg',
        'https://file4.batdongsan.com.vn/2025/06/09/20250609160951-6a1c_wm.jpg'
      ],
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
      verified: true,
      proAgent: true,
      type: 'ban',
      status: 'expired',
      userId: user3._id
    },
    {
      id: 7,
      title: 'Bán căn hộ cao cấp Quận 7',
      description: 'Căn hộ 2 phòng ngủ, view sông, nội thất cao cấp, tiện ích đầy đủ.',
      price: 2800000000,
      area: 75,
      bedrooms: 2,
      bathrooms: 2,
      category: 'Bán Căn hộ chung cư',
      location: {
        street: 'Đường Bạch Đằng',
        province: {
          code: 48,
          name: 'Đà Nẵng',
          name_with_type: 'Thành phố Đà Nẵng',
          slug: 'da-nang',
          type: 'thanh-pho',
          name_with_type_slug: 'thanh-pho-da-nang'
        },
        district: {
          code: 1,
          name: 'Hải Châu',
          name_with_type: 'Quận Hải Châu',
          slug: 'hai-chau',
          type: 'quan',
          name_with_type_slug: 'quan-hai-chau',
          path: '48',
          path_with_type: 'Thành phố Đà Nẵng, Quận Hải Châu',
          parent_code: 48
        },
        ward: {
          code: 2,
          name: 'Thạch Thang',
          name_with_type: 'Phường Thạch Thang',
          slug: 'thach-thang',
          type: 'phuong',
          name_with_type_slug: 'phuong-thach-thang',
          path: '48,1',
          path_with_type: 'Thành phố Đà Nẵng, Quận Hải Châu, Phường Thạch Thang',
          parent_code: 1
        }
      },
      image: 'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg',
      images: [
        'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg',
        'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-a7a8_wm.jpg',
        'https://file4.batdongsan.com.vn/2025/06/09/20250609160951-6a1c_wm.jpg'
      ],
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
      verified: true,
      proAgent: false,
      type: 'thue',
      status: 'active',
      userId: user4._id
    },
    {
      id: 8,
      title: 'Bán nhà phố Quận 1, TP.HCM',
      description: 'Nhà phố 3 tầng, gần trường học, khu dân cư an ninh.',
      price: 4200000000,
      area: 100,
      bedrooms: 3,
      bathrooms: 3,
      category: 'Bán Nhà',
      location: {
        street: 'Đường Nguyễn Thị Thập',
        province: {
          code: 79,
          name: 'Hồ Chí Minh',
          name_with_type: 'Thành phố Hồ Chí Minh',
          slug: 'ho-chi-minh',
          type: 'thanh-pho',
          name_with_type_slug: 'thanh-pho-ho-chi-minh'
        },
        district: {
          code: 7,
          name: 'Quận 7',
          name_with_type: 'Quận 7',
          slug: 'quan-7',
          type: 'quan',
          name_with_type_slug: 'quan-7',
          path: '79',
          path_with_type: 'Thành phố Hồ Chí Minh, Quận 7',
          parent_code: 79
        },
        ward: {
          code: 1,
          name: 'Tân Phong',
          name_with_type: 'Phường Tân Phong',
          slug: 'tan-phong',
          type: 'phuong',
          name_with_type_slug: 'phuong-tan-phong',
          path: '79,7',
          path_with_type: 'Thành phố Hồ Chí Minh, Quận 7, Phường Tân Phong',
          parent_code: 7
        }
      },
      image: 'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg',
      images: [
        'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg',
        'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-a7a8_wm.jpg',
        'https://file4.batdongsan.com.vn/2025/06/09/20250609160951-6a1c_wm.jpg'
      ],
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
      verified: true,
      proAgent: true,
      type: 'ban',
      status: 'active',
      userId: user4._id
    },
    {
      id: 9,
      title: 'Bán đất nền dự án Long Thành',
      description: 'Đất nền mặt tiền, vị trí đắc địa, tiềm năng sinh lời cao',
      price: 1200000000,
      area: 150,
      bedrooms: 0,
      bathrooms: 0,
      category: 'Bán Đất',
      location: {
        street: 'Đường Nguyễn Văn Linh',
        province: {
          code: 48,
          name: 'Đà Nẵng',
          name_with_type: 'Thành phố Đà Nẵng',
          slug: 'da-nang',
          type: 'thanh-pho',
          name_with_type_slug: 'thanh-pho-da-nang'
        },
        district: {
          code: 1,
          name: 'Hải Châu',
          name_with_type: 'Quận Hải Châu',
          slug: 'hai-chau',
          type: 'quan',
          name_with_type_slug: 'quan-hai-chau',
          path: '48',
          path_with_type: 'Thành phố Đà Nẵng, Quận Hải Châu',
          parent_code: 48
        },
        ward: {
          code: 1,
          name: 'Bình Hiên',
          name_with_type: 'Phường Bình Hiên',
          slug: 'binh-hien',
          type: 'phuong',
          name_with_type_slug: 'phuong-binh-hien',
          path: '48,1',
          path_with_type: 'Thành phố Đà Nẵng, Quận Hải Châu, Phường Bình Hiên',
          parent_code: 1
        }
      },
      image: 'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg',
      images: [
        'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg',
        'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-a7a8_wm.jpg',
        'https://file4.batdongsan.com.vn/2025/06/09/20250609160951-6a1c_wm.jpg'
      ],
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
      verified: false,
      proAgent: false,
      type: 'ban',
      status: 'pending',
      userId: user5._id
    },
    {
      id: 10,
      title: 'Bán nhà phố Bình Thạnh',
      description: 'Nhà phố 3 tầng, gần trường học, khu dân cư an ninh.',
      price: 4200000000,
      area: 100,
      bedrooms: 3,
      bathrooms: 3,
      category: 'Bán Nhà',
      location: {
        street: 'Đường Nguyễn Thị Thập',
        province: {
          code: 79,
          name: 'Hồ Chí Minh',
          name_with_type: 'Thành phố Hồ Chí Minh',
          slug: 'ho-chi-minh',
          type: 'thanh-pho',
          name_with_type_slug: 'thanh-pho-ho-chi-minh'
        },
        district: {
          code: 7,
          name: 'Quận 7',
          name_with_type: 'Quận 7',
          slug: 'quan-7',
          type: 'quan',
          name_with_type_slug: 'quan-7',
          path: '79',
          path_with_type: 'Thành phố Hồ Chí Minh, Quận 7',
          parent_code: 79
        },
        ward: {
          code: 1,
          name: 'Tân Phong',
          name_with_type: 'Phường Tân Phong',
          slug: 'tan-phong',
          type: 'phuong',
          name_with_type_slug: 'phuong-tan-phong',
          path: '79,7',
          path_with_type: 'Thành phố Hồ Chí Minh, Quận 7, Phường Tân Phong',
          parent_code: 7
        }
      },
      image: 'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg',
      images: [
        'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg',
        'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-a7a8_wm.jpg',
        'https://file4.batdongsan.com.vn/2025/06/09/20250609160951-6a1c_wm.jpg'
      ],
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
      verified: true,
      proAgent: true,
      type: 'ban',
      status: 'active',
      userId: user5._id
    },
    {
      id: 11,
      title: 'Biệt thự Đà Lạt',
      description: 'Biệt thự view đẹp, thiết kế sang trọng, tiện nghi cao cấp',
      price: 6500000000,
      area: 200,
      bedrooms: 4,
      bathrooms: 3,
      category: 'Bán Biệt thự',
      location: {
        street: 'Đường Trần Hưng Đạo',
        province: {
          code: 68,
          name: 'Lâm Đồng',
          name_with_type: 'Tỉnh Lâm Đồng',
          slug: 'lam-dong',
          type: 'tinh',
          name_with_type_slug: 'tinh-lam-dong'
        },
        district: {
          code: 1,
          name: 'Đà Lạt',
          name_with_type: 'Thành phố Đà Lạt',
          slug: 'da-lat',
          type: 'thanh-pho',
          name_with_type_slug: 'thanh-pho-da-lat',
          path: '68',
          path_with_type: 'Tỉnh Lâm Đồng, Thành phố Đà Lạt',
          parent_code: 68
        },
        ward: {
          code: 1,
          name: 'Phường 1',
          name_with_type: 'Phường 1',
          slug: 'phuong-1',
          type: 'phuong',
          name_with_type_slug: 'phuong-1',
          path: '68,1',
          path_with_type: 'Tỉnh Lâm Đồng, Thành phố Đà Lạt, Phường 1',
          parent_code: 1
        }
      },
      image: 'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg',
      images: ['https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg'],
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
      verified: true,
      proAgent: true,
      type: 'ban',
      status: 'active',
      userId: user5._id
    },
    {
      id: 12,
      title: 'Nhà phố Quận 7, Hồ Chí Minh',
      description: 'Nhà phố 3 tầng, gần trường học, khu dân cư an ninh.',
      price: 4200000000,
      area: 100,
      bedrooms: 3,
      bathrooms: 3,
      category: 'Bán Nhà',
      location: {
        street: 'Đường Nguyễn Thị Thập',
        province: {
          code: 79,
          name: 'Hồ Chí Minh',
          name_with_type: 'Thành phố Hồ Chí Minh',
          slug: 'ho-chi-minh',
          type: 'thanh-pho',
          name_with_type_slug: 'thanh-pho-ho-chi-minh'
        },
        district: {
          code: 7,
          name: 'Quận 7',
          name_with_type: 'Quận 7',
          slug: 'quan-7',
          type: 'quan',
          name_with_type_slug: 'quan-7',
          path: '79',
          path_with_type: 'Thành phố Hồ Chí Minh, Quận 7',
          parent_code: 79
        },
        ward: {
          code: 1,
          name: 'Tân Phong',
          name_with_type: 'Phường Tân Phong',
          slug: 'tan-phong',
          type: 'phuong',
          name_with_type_slug: 'phuong-tan-phong',
          path: '79,7',
          path_with_type: 'Thành phố Hồ Chí Minh, Quận 7, Phường Tân Phong',
          parent_code: 7
        }
      },
      image: 'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg',
      images: [
        'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg',
        'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-a7a8_wm.jpg',
        'https://file4.batdongsan.com.vn/2025/06/09/20250609160951-6a1c_wm.jpg'
      ],
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
      verified: true,
      proAgent: true,
      type: 'ban',
      status: 'active',
      userId: user5._id
    },
    {
      id: 13,
      title: 'Căn hộ view sông Hàn, Đà Nẵng',
      description: 'Căn hộ 2 phòng ngủ, view sông, nội thất cao cấp, tiện ích đầy đủ.',
      price: 2800000000,
      area: 75,
      bedrooms: 2,
      bathrooms: 2,
      category: 'Bán Căn hộ chung cư',
      location: {
        street: 'Đường Bạch Đằng',
        province: {
          code: 48,
          name: 'Đà Nẵng',
          name_with_type: 'Thành phố Đà Nẵng',
          slug: 'da-nang',
          type: 'thanh-pho',
          name_with_type_slug: 'thanh-pho-da-nang'
        },
        district: {
          code: 1,
          name: 'Hải Châu',
          name_with_type: 'Quận Hải Châu',
          slug: 'hai-chau',
          type: 'quan',
          name_with_type_slug: 'quan-hai-chau',
          path: '48',
          path_with_type: 'Thành phố Đà Nẵng, Quận Hải Châu',
          parent_code: 48
        },
        ward: {
          code: 2,
          name: 'Thạch Thang',
          name_with_type: 'Phường Thạch Thang',
          slug: 'thach-thang',
          type: 'phuong',
          name_with_type_slug: 'phuong-thach-thang',
          path: '48,1',
          path_with_type: 'Thành phố Đà Nẵng, Quận Hải Châu, Phường Thạch Thang',
          parent_code: 1
        }
      },
      image: 'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg',
      images: [
        'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg',
        'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-a7a8_wm.jpg',
        'https://file4.batdongsan.com.vn/2025/06/09/20250609160951-6a1c_wm.jpg'
      ],
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
      verified: true,
      proAgent: false,
      type: 'thue',
      status: 'active',
      userId: user5._id
    },
    {
      id: 14,
      title: 'Biệt thự sân vườn Bình Dương',
      description: 'Biệt thự sân vườn rộng rãi, không gian xanh, thích hợp nghỉ dưỡng.',
      price: 6500000000,
      area: 300,
      bedrooms: 6,
      bathrooms: 5,
      category: 'Bán Biệt thự',
      location: {
        street: 'Đường Đại Lộ Bình Dương',
        province: {
          code: 74,
          name: 'Bình Dương',
          name_with_type: 'Tỉnh Bình Dương',
          slug: 'binh-duong',
          type: 'tinh',
          name_with_type_slug: 'tinh-binh-duong'
        },
        district: {
          code: 1,
          name: 'Thủ Dầu Một',
          name_with_type: 'Thành phố Thủ Dầu Một',
          slug: 'thu-dau-mot',
          type: 'thanh-pho',
          name_with_type_slug: 'thanh-pho-thu-dau-mot',
          path: '74',
          path_with_type: 'Tỉnh Bình Dương, Thành phố Thủ Dầu Một',
          parent_code: 74
        },
        ward: {
          code: 2,
          name: 'Phú Hòa',
          name_with_type: 'Phường Phú Hòa',
          slug: 'phu-hoa',
          type: 'phuong',
          name_with_type_slug: 'phuong-phu-hoa',
          path: '74,1',
          path_with_type: 'Tỉnh Bình Dương, Thành phố Thủ Dầu Một, Phường Phú Hòa',
          parent_code: 1
        }
      },
      image: 'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg',
      images: [
        'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg',
        'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-a7a8_wm.jpg',
        'https://file4.batdongsan.com.vn/2025/06/09/20250609160951-6a1c_wm.jpg'
      ],
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
      verified: true,
      proAgent: true,
      type: 'ban',
      status: 'active',
      userId: user5._id
    },
    {
      id: 15,
      title: 'Masteri Rivera Danang - Căn hộ cao cấp view biển',
      description: 'Dự án căn hộ cao cấp Masteri Rivera Danang tọa lạc tại vị trí đắc địa đối diện siêu thị Lotte, công viên Asia Park và sắp tới là tầm view về toà tháp 69 tầng Đà Nẵng Downtown. Dự án được phát triển bởi Masterise Homes - nhà phát triển BĐS đẳng cấp quốc tế với hàng loạt dự án BĐS cao cấp tại Sài Gòn và Hà Nội: Masterise Thảo Điền, The Global City, The Grand...\n\nQuy mô dự án: căn hộ 39 tầng với 2 toà A và B, 2 tầng hầm đỗ xe.\nDiện tích: 18.296 m².\nTiện ích: 24 tiện ích ngoài trời, 07 tiện ích trong nhà.\nHình thức sở hữu: Sở hữu lâu dài (với KH quốc tịch Việt Nam)- Sở hữu 50 năm(với KH nước ngoài).\nBàn giao: Dự kiến Quý 3/2026.\nLoại căn hộ: 1PN +, 2PN, 2PN +, 3PN, dualkey.\n\nHiện đã mở bán toà B sold out gần 90% giỏ hàng- CHÍNH THỨC NHẬN BOOKING TOÀ A VỚI CHÍNH SÁCH ƯU ĐÃI KHỦNG.',
      price: 3500000000,
      area: 85,
      bedrooms: 2,
      bathrooms: 2,
      category: 'Bán Căn hộ chung cư',
      location: {
        street: 'Đường Quy Mỹ',
        province: {
          code: 48,
          name: 'Đà Nẵng',
          name_with_type: 'Thành phố Đà Nẵng',
          slug: 'da-nang',
          type: 'thanh-pho',
          name_with_type_slug: 'thanh-pho-da-nang'
        },
        district: {
          code: 1,
          name: 'Hải Châu',
          name_with_type: 'Quận Hải Châu',
          slug: 'hai-chau',
          type: 'quan',
          name_with_type_slug: 'quan-hai-chau',
          path: '48',
          path_with_type: 'Thành phố Đà Nẵng, Quận Hải Châu',
          parent_code: 48
        },
        ward: {
          code: 3,
          name: 'Hoà Cường Nam',
          name_with_type: 'Phường Hoà Cường Nam',
          slug: 'hoa-cuong-nam',
          type: 'phuong',
          name_with_type_slug: 'phuong-hoa-cuong-nam',
          path: '48,1',
          path_with_type: 'Thành phố Đà Nẵng, Quận Hải Châu, Phường Hoà Cường Nam',
          parent_code: 1
        }
      },
      image: 'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg',
      images: [
        'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-4289_wm.jpg',
        'https://file4.batdongsan.com.vn/resize/1275x717/2025/06/06/20250606181647-a7a8_wm.jpg',
        'https://file4.batdongsan.com.vn/2025/06/09/20250609160951-6a1c_wm.jpg'
      ],
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
      verified: true,
      proAgent: true,
      type: 'ban',
      status: 'active',
      userId: user5._id
    },
    {
      id: 16,
      title: 'Đồng Tiền Ổn Định 16Tr/Th Cho Căn Studio Của CDT GROUP Cách Biển Khe Chỉ 200M Giá Chỉ 2.4T',
      description: 'Căn hộ studio Condotel tại đường Vương Thừa Vũ, Phường Phước Mỹ, cách biển chỉ 200m. Dự án Sun Costa Residence. Giá chỉ 2.4 tỷ, mang lại dòng tiền ổn định 16 triệu/tháng.',
      price: 2400000000,
      area: 30,
      bedrooms: 0,
      bathrooms: 1,
      category: 'Bán Căn hộ Condotel',
      location: {
        street: 'Đường Vương Thừa Vũ',
        province: {
          code: 48,
          name: 'Đà Nẵng',
          name_with_type: 'Thành phố Đà Nẵng',
          slug: 'da-nang',
          type: 'thanh-pho',
          name_with_type_slug: 'thanh-pho-da-nang'
        },
        district: {
          code: 490,
          name: 'Sơn Trà',
          name_with_type: 'Quận Sơn Trà',
          slug: 'son-tra',
          type: 'quan',
          name_with_type_slug: 'quan-son-tra',
          path: '48',
          path_with_type: 'Thành phố Đà Nẵng, Quận Sơn Trà',
          parent_code: 48
        },
        ward: {
          code: 20005,
          name: 'Phước Mỹ',
          name_with_type: 'Phường Phước Mỹ',
          slug: 'phuoc-my',
          type: 'phuong',
          name_with_type_slug: 'phuong-phuoc-my',
          path: '48,490',
          path_with_type: 'Thành phố Đà Nẵng, Quận Sơn Trà, Phường Phước Mỹ',
          parent_code: 490
        }
      },
      image: 'https://file4.batdongsan.com.vn/resize/200x200/2025/05/01/20250501094252-6656_wm.jpg',
      images: [
        'https://file4.batdongsan.com.vn/resize/200x200/2025/05/01/20250501094252-6656_wm.jpg',
        'https://file4.batdongsan.com.vn/resize/200x200/2025/05/01/20250501094252-7c53_wm.jpg',
        'https://file4.batdongsan.com.vn/resize/200x200/2025/05/30/20250530071717-18a3_wm.jpg',
        'https://file4.batdongsan.com.vn/resize/200x200/2025/05/01/20250501094252-964e_wm.jpg',
        'https://file4.batdongsan.com.vn/resize/200x200/2025/05/01/20250501094252-7258_wm.jpg',
        'https://file4.batdongsan.com.vn/resize/200x200/2025/05/01/20250501094252-c807_wm.jpg'
      ],
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
      verified: true,
      proAgent: true,
      type: 'ban',
      status: 'active',
      userId: user5._id
    }
  ]);

  console.log('Seeded 5 users và property thành công!');
  process.exit();
})();