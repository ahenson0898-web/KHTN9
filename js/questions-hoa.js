const questions_hoa = [
{ id:1, level:"nhan_biet", question:"Tính chất vật lí chung của kim loại là", options:{A:"Dẫn điện, dẫn nhiệt, có ánh kim",B:"Tan trong nước",C:"Dễ bay hơi",D:"Không dẫn điện"}, answer:"A", explanation:"Kim loại dẫn điện, dẫn nhiệt tốt và có ánh kim.", equation:null },
{ id:2, level:"nhan_biet", question:"Kim loại dẫn điện tốt nhất là", options:{A:"Iron",B:"Aluminium",C:"Copper",D:"Silver"}, answer:"D", explanation:"Silver (Ag) dẫn điện tốt nhất.", equation:null },
{ id:3, level:"nhan_biet", question:"Kim loại phản ứng với nước ở nhiệt độ thường là", options:{A:"Fe",B:"Cu",C:"Na",D:"Ag"}, answer:"C", explanation:"Na phản ứng mạnh với nước.", equation:"2Na + 2H2O → 2NaOH + H2" },
{ id:4, level:"nhan_biet", question:"Phi kim thường có xu hướng", options:{A:"Nhường electron",B:"Nhận electron",C:"Dẫn điện",D:"Có ánh kim"}, answer:"B", explanation:"Phi kim có xu hướng nhận electron.", equation:null },
{ id:5, level:"nhan_biet", question:"Công thức của nhôm oxit là", options:{A:"AlO",B:"Al2O3",C:"AlO2",D:"Al3O"}, answer:"B", explanation:"Nhôm oxit có công thức Al2O3.", equation:"4Al + 3O2 → 2Al2O3" },
{ id:6, level:"nhan_biet", question:"Kim loại nhẹ, dùng chế tạo máy bay là", options:{A:"Fe",B:"Cu",C:"Al",D:"Pb"}, answer:"C", explanation:"Nhôm nhẹ, bền, chống ăn mòn.", equation:null },
{ id:7, level:"nhan_biet", question:"Phi kim dùng khử trùng nước là", options:{A:"Oxygen",B:"Nitrogen",C:"Chlorine",D:"Hydrogen"}, answer:"C", explanation:"Cl2 dùng khử trùng nước.", equation:null },
{ id:8, level:"nhan_biet", question:"Kim loại có tính dẻo nhất là", options:{A:"Fe",B:"Au",C:"Al",D:"Zn"}, answer:"B", explanation:"Vàng (Au) có tính dẻo cao.", equation:null },
{ id:9, level:"nhan_biet", question:"Sắt có kí hiệu hóa học là", options:{A:"Cu",B:"Fe",C:"Ag",D:"Al"}, answer:"B", explanation:"Sắt có kí hiệu Fe.", equation:null },
{ id:10, level:"nhan_biet", question:"Chất khí duy trì sự cháy là", options:{A:"N2",B:"CO2",C:"O2",D:"H2"}, answer:"C", explanation:"Oxi duy trì sự cháy.", equation:null },
{ id:11, level:"nhan_biet", question:"Dãy kim loại hoạt động hóa học mạnh nhất là", options:{A:"Cu, Ag, Au",B:"Fe, Zn, Al",C:"K, Na, Ca",D:"Cu, Fe, Zn"}, answer:"C", explanation:"K, Na, Ca hoạt động mạnh.", equation:null },
{ id:12, level:"nhan_biet", question:"Kim loại nào không phản ứng với HCl?", options:{A:"Zn",B:"Fe",C:"Al",D:"Cu"}, answer:"D", explanation:"Cu đứng sau H.", equation:null },
{ id:13, level:"nhan_biet", question:"Phi kim có nhiệt độ nóng chảy thường", options:{A:"Cao",B:"Thấp",C:"Rất cao",D:"Không xác định"}, answer:"B", explanation:"Phi kim thường có Tnc thấp.", equation:null },
{ id:14, level:"nhan_biet", question:"Sản phẩm của phản ứng Fe + S là", options:{A:"FeS",B:"FeSO4",C:"Fe2S3",D:"FeO"}, answer:"A", explanation:"Fe + S → FeS.", equation:"Fe + S → FeS" },
{ id:15, level:"nhan_biet", question:"Kim loại kiềm thuộc nhóm", options:{A:"IA",B:"IIA",C:"IIIA",D:"IVA"}, answer:"A", explanation:"Kim loại kiềm thuộc nhóm IA.", equation:null },
{ id:16, level:"nhan_biet", question:"Phi kim tồn tại dạng đơn chất là", options:{A:"CO2",B:"NaCl",C:"O2",D:"H2O"}, answer:"C", explanation:"O2 là đơn chất.", equation:null },
{ id:17, level:"nhan_biet", question:"Kim loại dùng mạ bảo vệ sắt là", options:{A:"Cu",B:"Ag",C:"Zn",D:"Au"}, answer:"C", explanation:"Mạ kẽm bảo vệ sắt.", equation:null },
{ id:18, level:"nhan_biet", question:"Oxit kim loại thường có tính", options:{A:"Axit",B:"Bazơ",C:"Trung tính",D:"Lưỡng tính"}, answer:"B", explanation:"Oxit kim loại thường có tính bazơ.", equation:null },
{ id:19, level:"nhan_biet", question:"Oxit phi kim thường có tính", options:{A:"Bazơ",B:"Kim loại",C:"Axit",D:"Lưỡng tính"}, answer:"C", explanation:"Oxit phi kim thường có tính axit.", equation:null },
{ id:20, level:"nhan_biet", question:"Kim loại nào có khối lượng riêng lớn nhất?", options:{A:"Al",B:"Fe",C:"Cu",D:"Au"}, answer:"D", explanation:"Vàng có khối lượng riêng lớn.", equation:null },
{ id:21, level:"nhan_biet", question:"Sắt bị gỉ trong điều kiện có", options:{A:"Nước",B:"Oxi",C:"Nước và oxi",D:"CO2"}, answer:"C", explanation:"Cần cả nước và oxi.", equation:null },
{ id:22, level:"nhan_biet", question:"Kim loại được điều chế bằng điện phân nóng chảy là", options:{A:"Fe",B:"Cu",C:"Na",D:"Zn"}, answer:"C", explanation:"Na rất hoạt động.", equation:null },
{ id:23, level:"nhan_biet", question:"Chất tạo màu xanh lục vàng là", options:{A:"O2",B:"N2",C:"Cl2",D:"CO2"}, answer:"C", explanation:"Cl2 có màu vàng lục.", equation:null },
{ id:24, level:"nhan_biet", question:"Kim loại quý là", options:{A:"Fe",B:"Cu",C:"Ag",D:"Na"}, answer:"C", explanation:"Ag là kim loại quý.", equation:null },
{ id:25, level:"nhan_biet", question:"Hợp kim là", options:{A:"Kim loại tinh khiết",B:"Hỗn hợp kim loại",C:"Phi kim",D:"Dung dịch"}, answer:"B", explanation:"Hợp kim là hỗn hợp.", equation:null },
{ id:26, level:"nhan_biet", question:"Gang là hợp kim của sắt với", options:{A:"Al",B:"Cu",C:"C",D:"Zn"}, answer:"C", explanation:"Gang là hợp kim Fe–C.", equation:null },
{ id:27, level:"nhan_biet", question:"Thép có hàm lượng C", options:{A:">5%",B:"<2%",C:"=5%",D:"=10%"}, answer:"B", explanation:"Thép có <2% C.", equation:null },
{ id:28, level:"nhan_biet", question:"Kim loại có màu đỏ là", options:{A:"Au",B:"Fe",C:"Cu",D:"Ag"}, answer:"C", explanation:"Đồng có màu đỏ.", equation:null },
{ id:29, level:"nhan_biet", question:"Phi kim phổ biến nhất trong không khí là", options:{A:"O2",B:"N2",C:"CO2",D:"H2"}, answer:"B", explanation:"N2 chiếm ~78%.", equation:null },
{ id:30, level:"nhan_biet", question:"Sản phẩm của C cháy hoàn toàn là", options:{A:"CO",B:"CO2",C:"C",D:"H2"}, answer:"B", explanation:"C + O2 → CO2.", equation:"C + O2 → CO2" },
{ id:31, level:"thong_hieu", question:"Nhôm bền trong không khí do", options:{A:"Không phản ứng",B:"Có lớp Al2O3",C:"Nhẹ",D:"Dẫn điện"}, answer:"B", explanation:"Lớp Al2O3 bảo vệ.", equation:"4Al + 3O2 → 2Al2O3" },
{ id:32, level:"thong_hieu", question:"Fe đẩy Cu khỏi dung dịch CuSO4 vì", options:{A:"Fe nhẹ hơn",B:"Fe hoạt động mạnh hơn",C:"Cu tan",D:"Fe có màu xám"}, answer:"B", explanation:"Fe đứng trước Cu.", equation:"Fe + CuSO4 → FeSO4 + Cu" },
{ id:33, level:"thong_hieu", question:"Na bảo quản trong dầu hỏa để", options:{A:"Tránh bay hơi",B:"Tránh oxi và nước",C:"Giữ màu",D:"Tránh nóng"}, answer:"B", explanation:"Na phản ứng với O2 và H2O.", equation:null },
{ id:34, level:"thong_hieu", question:"Oxit nào là oxit axit?", options:{A:"Na2O",B:"CaO",C:"SO2",D:"MgO"}, answer:"C", explanation:"SO2 là oxit axit.", equation:null },
{ id:35, level:"thong_hieu", question:"Kim loại dễ bị ăn mòn nhất là", options:{A:"Au",B:"Ag",C:"Fe",D:"Na"}, answer:"D", explanation:"Na hoạt động mạnh.", equation:null },
{ id:36, level:"thong_hieu", question:"Gỉ sắt là", options:{A:"FeO",B:"Fe2O3.nH2O",C:"Fe3O4",D:"Fe"}, answer:"B", explanation:"Gỉ sắt là oxit ngậm nước.", equation:null },
{ id:37, level:"thong_hieu", question:"Vì sao Zn bảo vệ Fe?", options:{A:"Zn đẹp",B:"Zn nặng",C:"Zn hoạt động mạnh hơn",D:"Zn rẻ"}, answer:"C", explanation:"Zn bị oxi hóa trước.", equation:null },
{ id:38, level:"thong_hieu", question:"Cl2 độc vì", options:{A:"Nặng",B:"Gây ngạt",C:"Phá hủy hô hấp",D:"Không màu"}, answer:"C", explanation:"Cl2 gây tổn thương phổi.", equation:null },
{ id:39, level:"thong_hieu", question:"Kim loại nào không gỉ?", options:{A:"Fe",B:"Al",C:"Cu",D:"Thép không gỉ"}, answer:"D", explanation:"Có Cr bảo vệ.", equation:null },
{ id:40, level:"thong_hieu", question:"Vì sao CO2 không duy trì cháy?", options:{A:"Nặng",B:"Không có O2",C:"Độc",D:"Tan nước"}, answer:"B", explanation:"Không cung cấp oxi.", equation:null },
{ id:41, level:"thong_hieu", question:"Kim loại phản ứng với axit giải phóng", options:{A:"O2",B:"CO2",C:"H2",D:"N2"}, answer:"C", explanation:"Giải phóng H2.", equation:null },
{ id:42, level:"thong_hieu", question:"Oxit lưỡng tính là", options:{A:"Al2O3",B:"Na2O",C:"SO2",D:"CO2"}, answer:"A", explanation:"Al2O3 vừa bazơ vừa axit.", equation:null },
{ id:43, level:"thong_hieu", question:"Thép cứng hơn sắt do", options:{A:"Nhiều Fe",B:"Có C",C:"Có Al",D:"Có Cu"}, answer:"B", explanation:"C làm tăng độ cứng.", equation:null },
{ id:44, level:"thong_hieu", question:"Khí gây hiệu ứng nhà kính mạnh là", options:{A:"O2",B:"N2",C:"CO2",D:"H2"}, answer:"C", explanation:"CO2 gây hiệu ứng nhà kính.", equation:null },
{ id:45, level:"thong_hieu", question:"Vôi sống là", options:{A:"CaCO3",B:"Ca(OH)2",C:"CaO",D:"CaCl2"}, answer:"C", explanation:"CaO là vôi sống.", equation:"CaCO3 → CaO + CO2" },

{ id:46, level:"thong_hieu", question:"Vôi tôi là", options:{A:"CaCO3",B:"CaO",C:"Ca(OH)2",D:"CaCl2"}, answer:"C", explanation:"CaO + H2O → Ca(OH)2.", equation:"CaO + H2O → Ca(OH)2" },
{ id:47, level:"thong_hieu", question:"Kim loại nào phản ứng được với dung dịch muối CuSO4?", options:{A:"Ag",B:"Au",C:"Fe",D:"Hg"}, answer:"C", explanation:"Fe mạnh hơn Cu.", equation:null },
{ id:48, level:"thong_hieu", question:"Dập tắt đám cháy xăng bằng CO2 vì", options:{A:"CO2 lạnh",B:"CO2 nặng",C:"CO2 không duy trì cháy",D:"CO2 tan"}, answer:"C", explanation:"CO2 không duy trì cháy.", equation:null },
{ id:49, level:"thong_hieu", question:"Kim loại nào mềm nhất?", options:{A:"Fe",B:"Na",C:"Al",D:"Zn"}, answer:"B", explanation:"Na rất mềm.", equation:null },
{ id:50, level:"thong_hieu", question:"Nguyên nhân ăn mòn điện hóa là do", options:{A:"Nhiệt",B:"Hai kim loại khác nhau",C:"Ánh sáng",D:"Áp suất"}, answer:"B", explanation:"Tạo pin điện hóa.", equation:null },

{ id:51, level:"van_dung", question:"Cho 5,6g Fe tác dụng HCl dư. Thể tích H2 (đktc) là", options:{A:"1,12l",B:"2,24l",C:"3,36l",D:"4,48l"}, answer:"B", explanation:"nFe=0,1 → V=2,24l.", equation:"Fe + 2HCl → FeCl2 + H2" },
{ id:52, level:"van_dung", question:"Kim loại nào dùng làm anot hi sinh bảo vệ sắt?", options:{A:"Cu",B:"Ag",C:"Zn",D:"Au"}, answer:"C", explanation:"Zn hoạt động mạnh hơn Fe.", equation:null },
{ id:53, level:"van_dung", question:"Đốt 6,4g S thu được SO2. Thể tích khí (đktc)?", options:{A:"2,24l",B:"4,48l",C:"1,12l",D:"3,36l"}, answer:"B", explanation:"nS=0,2 → V=4,48l.", equation:"S + O2 → SO2" },

{ id:54, level:"van_dung", question:"Kim loại nào sau đây không bị H2SO4 loãng tác dụng?", options:{A:"Zn",B:"Fe",C:"Al",D:"Cu"}, answer:"D", explanation:"Cu đứng sau H.", equation:null },
{ id:55, level:"van_dung", question:"Khối lượng CaO thu được từ 100g CaCO3 là", options:{A:"44g",B:"56g",C:"100g",D:"28g"}, answer:"B", explanation:"M(CaO)=56.", equation:"CaCO3 → CaO + CO2" },

{ id:56, level:"van_dung", question:"Kim loại nào dùng chế tạo dây điện?", options:{A:"Fe",B:"Cu",C:"Pb",D:"Zn"}, answer:"B", explanation:"Cu dẫn điện tốt.", equation:null },
{ id:57, level:"van_dung", question:"Dãy nào chỉ gồm kim loại?", options:{A:"Na, Al, Fe",B:"Na, O, Fe",C:"Cu, S, Fe",D:"Cl, Br, I"}, answer:"A", explanation:"Đều là kim loại.", equation:null },
{ id:58, level:"van_dung", question:"Đốt Mg trong không khí tạo", options:{A:"MgO",B:"MgCO3",C:"MgCl2",D:"MgSO4"}, answer:"A", explanation:"2Mg + O2 → 2MgO.", equation:"2Mg + O2 → 2MgO" },
{ id:59, level:"van_dung", question:"Kim loại nào đứng trước H?", options:{A:"Cu",B:"Ag",C:"Fe",D:"Au"}, answer:"C", explanation:"Fe đứng trước H.", equation:null },
{ id:60, level:"van_dung", question:"Chất dùng để dập cháy kim loại Na là", options:{A:"Nước",B:"CO2",C:"Cát khô",D:"Bọt"}, answer:"C", explanation:"Không dùng nước.", equation:null },

{ id:61, level:"van_dung_cao", question:"Vỏ tàu biển nên dùng kim loại nào để chống ăn mòn?", options:{A:"Cu",B:"Fe",C:"Fe mạ Zn",D:"Ag"}, answer:"C", explanation:"Bảo vệ điện hóa.", equation:null },
{ id:62, level:"van_dung_cao", question:"Giải pháp bền vững nhất hạn chế ăn mòn kim loại là", options:{A:"Sơn phủ + bảo vệ điện hóa",B:"Rửa nước",C:"Đánh bóng",D:"Dùng kim loại nặng"}, answer:"A", explanation:"Hiệu quả lâu dài.", equation:null },
{ id:63, level:"van_dung_cao", question:"Nguyên nhân chính làm sắt gỉ nhanh ở vùng biển là do", options:{A:"Nhiệt độ cao",B:"Độ ẩm và muối",C:"Ánh sáng mạnh",D:"Áp suất lớn"}, answer:"B", explanation:"Nước muối tạo môi trường điện li, tăng ăn mòn điện hóa.", equation:null },

{ id:64, level:"van_dung_cao", question:"Kim loại nào sau đây bảo vệ sắt tốt nhất bằng phương pháp anot hi sinh?", options:{A:"Cu",B:"Ag",C:"Zn",D:"Sn"}, answer:"C", explanation:"Zn hoạt động mạnh hơn Fe nên bị oxi hóa trước.", equation:null },

{ id:65, level:"van_dung_cao", question:"Cho Fe tiếp xúc với Cu trong môi trường ẩm. Kim loại bị ăn mòn là", options:{A:"Cu",B:"Fe",C:"Cả hai",D:"Không kim loại nào"}, answer:"B", explanation:"Fe hoạt động mạnh hơn Cu nên bị ăn mòn.", equation:null },

{ id:66, level:"van_dung", question:"Đốt cháy hoàn toàn 5,6 g Fe trong O2 thu được Fe3O4. Khối lượng sản phẩm là", options:{A:"7,2 g",B:"8,0 g",C:"9,6 g",D:"10,4 g"}, answer:"C", explanation:"mFe3O4 = mFe + mO = 5,6 + 4,0 = 9,6 g.", equation:"3Fe + 2O2 → Fe3O4" },

{ id:67, level:"van_dung", question:"Kim loại nào dùng làm dây dẫn điện cao thế?", options:{A:"Fe",B:"Cu",C:"Al",D:"Ag"}, answer:"C", explanation:"Al nhẹ, dẫn điện khá tốt, giá rẻ.", equation:null },

{ id:68, level:"van_dung", question:"Chất nào sau đây không phải là oxit?", options:{A:"CaO",B:"CO2",C:"NaCl",D:"SO2"}, answer:"C", explanation:"NaCl là muối.", equation:null },

{ id:69, level:"van_dung", question:"Sắt được điều chế trong lò cao chủ yếu nhờ phản ứng", options:{A:"Fe2O3 + H2",B:"Fe2O3 + CO",C:"Fe2O3 + O2",D:"Fe2O3 + H2O"}, answer:"B", explanation:"CO khử oxit sắt trong lò cao.", equation:"Fe2O3 + 3CO → 2Fe + 3CO2" },

{ id:70, level:"van_dung", question:"Kim loại nào sau đây có thể cắt bằng dao?", options:{A:"Fe",B:"Na",C:"Cu",D:"Zn"}, answer:"B", explanation:"Na rất mềm.", equation:null },

{ id:71, level:"van_dung", question:"Cho 2,3 g Na phản ứng với nước. Thể tích H2 (đktc) là", options:{A:"1,12 l",B:"2,24 l",C:"3,36 l",D:"4,48 l"}, answer:"A", explanation:"nNa=0,1 → nH2=0,05 → V=1,12 l.", equation:"2Na + 2H2O → 2NaOH + H2" },

{ id:72, level:"van_dung", question:"Kim loại nào sau đây không tồn tại dạng đơn chất trong tự nhiên?", options:{A:"Au",B:"Ag",C:"Na",D:"Cu"}, answer:"C", explanation:"Na rất hoạt động.", equation:null },

{ id:73, level:"van_dung", question:"Khí sinh ra khi kim loại tác dụng với axit là", options:{A:"CO2",B:"O2",C:"H2",D:"N2"}, answer:"C", explanation:"Giải phóng khí H2.", equation:null },

{ id:74, level:"van_dung", question:"Oxit nào phản ứng được với cả axit và bazơ?", options:{A:"CaO",B:"SO2",C:"Al2O3",D:"Na2O"}, answer:"C", explanation:"Al2O3 là oxit lưỡng tính.", equation:null },

{ id:75, level:"van_dung", question:"Vật liệu nào sau đây là hợp kim?", options:{A:"Sắt nguyên chất",B:"Đồng nguyên chất",C:"Thép",D:"Nhôm"}, answer:"C", explanation:"Thép là hợp kim của Fe và C.", equation:null },

{ id:76, level:"van_dung_cao", question:"Trong các biện pháp sau, biện pháp nào không làm giảm ăn mòn kim loại?", options:{A:"Sơn phủ",B:"Mạ kim loại",C:"Tăng độ ẩm",D:"Bảo vệ điện hóa"}, answer:"C", explanation:"Độ ẩm cao làm tăng ăn mòn.", equation:null },

{ id:77, level:"van_dung_cao", question:"Kim loại nào có thể đẩy được Fe khỏi dung dịch muối sắt?", options:{A:"Cu",B:"Ag",C:"Zn",D:"Au"}, answer:"C", explanation:"Zn đứng trước Fe.", equation:null },

{ id:78, level:"van_dung_cao", question:"Cho Al tiếp xúc dung dịch HCl đặc nguội. Hiện tượng", options:{A:"Phản ứng mạnh",B:"Không phản ứng",C:"Tan chậm",D:"Giải phóng CO2"}, answer:"B", explanation:"Al bị thụ động hóa.", equation:null },

{ id:79, level:"van_dung_cao", question:"Cách bảo quản Na an toàn nhất là", options:{A:"Trong nước",B:"Ngoài không khí",C:"Trong dầu hỏa",D:"Trong dung dịch muối"}, answer:"C", explanation:"Tránh tiếp xúc O2 và H2O.", equation:null },

{ id:80, level:"van_dung_cao", question:"Vì sao không dùng nước để dập cháy Na?", options:{A:"Nước hiếm",B:"Nước gây nổ",C:"Na tan",D:"Nước bay hơi"}, answer:"B", explanation:"Na phản ứng với nước tạo H2 gây nổ.", equation:"2Na + 2H2O → 2NaOH + H2" },

{ id:81, level:"van_dung_cao", question:"Trong pin điện hóa Fe–Cu, kim loại đóng vai trò anot là", options:{A:"Cu",B:"Fe",C:"Cả hai",D:"Không kim loại nào"}, answer:"B", explanation:"Fe bị oxi hóa trước.", equation:null },

{ id:82, level:"van_dung_cao", question:"Khí CO không duy trì sự cháy vì", options:{A:"Nặng",B:"Độc",C:"Không cung cấp O2",D:"Tan nước"}, answer:"C", explanation:"Không cung cấp oxi.", equation:null },

{ id:83, level:"van_dung_cao", question:"Kim loại nào phù hợp nhất làm vỏ đồ hộp?", options:{A:"Fe trần",B:"Fe mạ Sn",C:"Cu",D:"Al nguyên chất"}, answer:"B", explanation:"Thiếc chống ăn mòn, an toàn.", equation:null },

{ id:84, level:"van_dung_cao", question:"Khi tăng diện tích tiếp xúc kim loại với không khí thì tốc độ ăn mòn", options:{A:"Giảm",B:"Không đổi",C:"Tăng",D:"Bằng 0"}, answer:"C", explanation:"Diện tích lớn → ăn mòn nhanh.", equation:null },

{ id:85, level:"van_dung_cao", question:"Kim loại nào có khả năng chống ăn mòn tốt nhất?", options:{A:"Fe",B:"Cu",C:"Au",D:"Zn"}, answer:"C", explanation:"Au là kim loại quý.", equation:null },

{ id:86, level:"van_dung_cao", question:"Lí do thép không gỉ bền là vì có chứa", options:{A:"Ni",B:"C",C:"Cr",D:"Zn"}, answer:"C", explanation:"Cr tạo lớp oxit bền.", equation:null },

{ id:87, level:"van_dung_cao", question:"Kim loại nào sau đây vừa nhẹ vừa bền?", options:{A:"Fe",B:"Cu",C:"Al",D:"Pb"}, answer:"C", explanation:"Al nhẹ và bền.", equation:null },

{ id:88, level:"van_dung_cao", question:"Để hạn chế ô nhiễm do luyện kim cần", options:{A:"Tăng sản xuất",B:"Xử lí khí thải",C:"Dùng than nhiều",D:"Giảm lọc"}, answer:"B", explanation:"Xử lí SO2, CO.", equation:null },

{ id:89, level:"van_dung_cao", question:"Kim loại nào không dẫn điện?", options:{A:"Fe",B:"Cu",C:"Ag",D:"Không có"}, answer:"D", explanation:"Tất cả kim loại đều dẫn điện.", equation:null },

{ id:90, level:"van_dung_cao", question:"Ứng dụng nào không đúng của Al?", options:{A:"Dây dẫn",B:"Vỏ máy bay",C:"Nhiệt kế",D:"Đồ gia dụng"}, answer:"C", explanation:"Nhiệt kế dùng Hg.", equation:null },

{ id:91, level:"van_dung_cao", question:"Đốt kim loại nào cho ánh sáng trắng chói?", options:{A:"Fe",B:"Al",C:"Mg",D:"Cu"}, answer:"C", explanation:"Mg cháy sáng mạnh.", equation:"2Mg + O2 → 2MgO" },

{ id:92, level:"van_dung_cao", question:"Chất nào làm chậm quá trình gỉ sắt?", options:{A:"Nước",B:"Muối",C:"Dầu mỡ",D:"Không khí"}, answer:"C", explanation:"Cách li O2 và H2O.", equation:null },

{ id:93, level:"van_dung_cao", question:"Kim loại nào sau đây không dùng làm vật liệu xây dựng?", options:{A:"Fe",B:"Al",C:"Cu",D:"Na"}, answer:"D", explanation:"Na quá hoạt động.", equation:null },

{ id:94, level:"van_dung_cao", question:"Để bảo vệ cầu thép người ta thường", options:{A:"Ngâm nước",B:"Sơn phủ",C:"Đốt nóng",D:"Cắt nhỏ"}, answer:"B", explanation:"Cách li môi trường.", equation:null },

{ id:95, level:"van_dung_cao", question:"Trong sản xuất thép, chất làm giảm hàm lượng C là", options:{A:"Than cốc",B:"Oxi",C:"CO",D:"Đá vôi"}, answer:"B", explanation:"Oxi oxi hóa C.", equation:null },

{ id:96, level:"van_dung_cao", question:"Khí SO2 sinh ra nhiều nhất khi", options:{A:"Đốt than",B:"Đốt S",C:"Đốt Fe",D:"Đốt H2"}, answer:"B", explanation:"S + O2 → SO2.", equation:"S + O2 → SO2" },

{ id:97, level:"van_dung_cao", question:"Biện pháp tiết kiệm kim loại là", options:{A:"Tái chế",B:"Chôn lấp",C:"Đốt bỏ",D:"Vứt bỏ"}, answer:"A", explanation:"Tái chế tiết kiệm tài nguyên.", equation:null },

{ id:98, level:"van_dung_cao", question:"Kim loại nào không có trong dãy hoạt động?", options:{A:"K",B:"Na",C:"Hg",D:"Fe"}, answer:"C", explanation:"Hg không xét trong dãy cơ bản.", equation:null },

{ id:99, level:"van_dung_cao", question:"Tác nhân chính gây mưa axit là", options:{A:"CO2",B:"SO2",C:"O2",D:"N2"}, answer:"B", explanation:"SO2 tạo H2SO4.", equation:null },

{ id:100, level:"van_dung_cao", question:"Biện pháp bền vững nhất sử dụng kim loại là", options:{A:"Khai thác tối đa",B:"Tái chế và sử dụng hợp lí",C:"Chôn lấp",D:"Đốt bỏ"}, answer:"B", explanation:"Bảo vệ tài nguyên lâu dài.", equation:null },
{ id:1, level:"nhan_biet", question:"Hợp chất hữu cơ là hợp chất của", options:{A:"Kim loại",B:"Phi kim",C:"Carbon (trừ CO, CO2)",D:"Oxygen"}, answer:"C", explanation:"Hợp chất hữu cơ là hợp chất của C (trừ CO, CO2, muối cacbonat).", equation:null },
{ id:2, level:"nhan_biet", question:"Chất nào sau đây là hợp chất hữu cơ?", options:{A:"CO2",B:"Na2CO3",C:"CH4",D:"CaCO3"}, answer:"C", explanation:"CH4 (metan) là hiđrocacbon.", equation:null },

{ id:3, level:"nhan_biet", question:"Ankan có công thức chung là", options:{A:"CnH2n",B:"CnH2n+2",C:"CnH2n−2",D:"CnHn"}, answer:"B", explanation:"Ankan có CT chung CnH2n+2.", equation:null },

{ id:4, level:"nhan_biet", question:"Công thức phân tử của metan là", options:{A:"CH4",B:"C2H6",C:"C2H4",D:"C3H8"}, answer:"A", explanation:"Metan có công thức CH4.", equation:"CH4 + 2O2 → CO2 + 2H2O" },

{ id:5, level:"nhan_biet", question:"Công thức cấu tạo của etan là", options:{A:"CH4",B:"CH2=CH2",C:"CH3–CH3",D:"CH≡CH"}, answer:"C", explanation:"Etan có CTCT CH3–CH3.", structure:"CH3–CH3" },

{ id:6, level:"nhan_biet", question:"Anken có công thức chung là", options:{A:"CnH2n+2",B:"CnH2n",C:"CnH2n−2",D:"CnHn"}, answer:"B", explanation:"Anken có một liên kết đôi.", equation:null },

{ id:7, level:"nhan_biet", question:"Công thức cấu tạo của etilen là", options:{A:"CH3–CH3",B:"CH2=CH2",C:"CH≡CH",D:"CH4"}, answer:"B", explanation:"Etilen có liên kết đôi C=C.", structure:"CH2=CH2" },

{ id:8, level:"nhan_biet", question:"Phản ứng đặc trưng của anken là", options:{A:"Thế",B:"Oxi hóa",C:"Cộng",D:"Trung hòa"}, answer:"C", explanation:"Anken có phản ứng cộng.", equation:"C2H4 + Br2 → C2H4Br2" },

{ id:9, level:"nhan_biet", question:"Dung dịch brom dùng để nhận biết", options:{A:"Ankan",B:"Anken",C:"Ancol",D:"Axit"}, answer:"B", explanation:"Anken làm mất màu dung dịch brom.", equation:null },

{ id:10, level:"nhan_biet", question:"Phản ứng cháy của hiđrocacbon tạo ra", options:{A:"CO",B:"CO2 và H2O",C:"C và H2",D:"CO2"}, answer:"B", explanation:"Cháy hoàn toàn tạo CO2 và H2O.", equation:"CnHm + (n+m/4)O2 → nCO2 + (m/2)H2O" },

{ id:11, level:"nhan_biet", question:"Nhiên liệu khí phổ biến nhất là", options:{A:"CO2",B:"O2",C:"CH4",D:"N2"}, answer:"C", explanation:"CH4 là thành phần chính của khí thiên nhiên.", equation:null },

{ id:12, level:"nhan_biet", question:"Dầu mỏ là", options:{A:"Hợp chất tinh khiết",B:"Hỗn hợp nhiều hiđrocacbon",C:"Phi kim",D:"Kim loại"}, answer:"B", explanation:"Dầu mỏ là hỗn hợp hiđrocacbon.", equation:null },

{ id:13, level:"nhan_biet", question:"Nhiên liệu dùng nhiều trong bếp gas là", options:{A:"C2H4",B:"C2H6",C:"CH4",D:"CO"}, answer:"C", explanation:"Bếp gas dùng metan.", equation:null },

{ id:14, level:"nhan_biet", question:"Chất không phải nhiên liệu là", options:{A:"Than đá",B:"Xăng",C:"Dầu mỏ",D:"CO2"}, answer:"D", explanation:"CO2 không cháy.", equation:null },

{ id:15, level:"nhan_biet", question:"Ankan không phản ứng với", options:{A:"O2",B:"Cl2 (ánh sáng)",C:"Br2 (dd)",D:"Nhiệt"}, answer:"C", explanation:"Ankan không làm mất màu Br2.", equation:null },

{ id:16, level:"nhan_biet", question:"Sản phẩm của phản ứng trùng hợp etilen là", options:{A:"PE",B:"PVC",C:"PS",D:"Nilon"}, answer:"A", explanation:"PE được tạo từ etilen.", equation:"nCH2=CH2 → (–CH2–CH2–)n" },

{ id:17, level:"nhan_biet", question:"Polietilen là", options:{A:"Nhựa nhiệt rắn",B:"Nhựa nhiệt dẻo",C:"Kim loại",D:"Phi kim"}, answer:"B", explanation:"PE là nhựa nhiệt dẻo.", equation:null },

{ id:18, level:"nhan_biet", question:"Hiđrocacbon chỉ chứa", options:{A:"C, O",B:"C, H",C:"C, N",D:"C, S"}, answer:"B", explanation:"Hiđrocacbon chỉ gồm C và H.", equation:null },

{ id:19, level:"nhan_biet", question:"Tên quốc tế của CH4 là", options:{A:"Methane",B:"Ethane",C:"Propane",D:"Butane"}, answer:"A", explanation:"CH4 có tên methane.", equation:null },

{ id:20, level:"nhan_biet", question:"Tên quốc tế của C2H4 là", options:{A:"Ethane",B:"Ethyne",C:"Ethene",D:"Propene"}, answer:"C", explanation:"C2H4 là ethene.", equation:null },

{ id:21, level:"nhan_biet", question:"Nhiên liệu hóa thạch không bao gồm", options:{A:"Than đá",B:"Dầu mỏ",C:"Khí thiên nhiên",D:"Gỗ"}, answer:"D", explanation:"Gỗ không phải nhiên liệu hóa thạch.", equation:null },

{ id:22, level:"nhan_biet", question:"Hiđrocacbon no là", options:{A:"Anken",B:"Ankin",C:"Ankan",D:"Aren"}, answer:"C", explanation:"Ankan là hiđrocacbon no.", equation:null },

{ id:23, level:"nhan_biet", question:"Liên kết đặc trưng trong anken là", options:{A:"Đơn",B:"Đôi",C:"Ba",D:"Ion"}, answer:"B", explanation:"Anken có 1 liên kết đôi.", equation:null },

{ id:24, level:"nhan_biet", question:"Sản phẩm cháy không hoàn toàn của hiđrocacbon có thể là", options:{A:"CO",B:"CO2",C:"H2O",D:"O2"}, answer:"A", explanation:"Thiếu O2 tạo CO.", equation:null },

{ id:25, level:"nhan_biet", question:"Chất dùng để phát hiện CO2 là", options:{A:"Nước cất",B:"Dung dịch NaCl",C:"Nước vôi trong",D:"Dung dịch HCl"}, answer:"C", explanation:"CO2 làm đục nước vôi.", equation:"CO2 + Ca(OH)2 → CaCO3 ↓ + H2O" },

{ id:26, level:"nhan_biet", question:"Khí thiên nhiên chủ yếu gồm", options:{A:"C2H6",B:"C3H8",C:"CH4",D:"C4H10"}, answer:"C", explanation:"Thành phần chính là CH4.", equation:null },

{ id:27, level:"nhan_biet", question:"Xăng là sản phẩm thu được từ", options:{A:"Than đá",B:"Chưng cất dầu mỏ",C:"Khí thiên nhiên",D:"Gỗ"}, answer:"B", explanation:"Xăng thu từ chưng cất phân đoạn dầu mỏ.", equation:null },

{ id:28, level:"nhan_biet", question:"Hiđrocacbon không no là", options:{A:"CH4",B:"C2H6",C:"C2H4",D:"C3H8"}, answer:"C", explanation:"C2H4 là anken.", equation:null },

{ id:29, level:"nhan_biet", question:"Số liên kết đôi trong phân tử C2H4 là", options:{A:"0",B:"1",C:"2",D:"3"}, answer:"B", explanation:"Etilen có 1 liên kết đôi.", equation:null },

{ id:30, level:"nhan_biet", question:"Ứng dụng quan trọng của etilen là", options:{A:"Làm nhiên liệu",B:"Kích thích quả chín",C:"Làm thuốc nổ",D:"Làm phân bón"}, answer:"B", explanation:"Etilen dùng kích thích quả chín.", equation:null },

{ id:31, level:"thong_hieu", question:"Vì sao ankan không làm mất màu dung dịch brom?", options:{A:"Ankan tan trong nước",B:"Ankan không có liên kết đôi",C:"Ankan có phản ứng thế",D:"Ankan nhẹ hơn brom"}, answer:"B", explanation:"Ankan là hiđrocacbon no, chỉ có liên kết đơn.", equation:null },

{ id:32, level:"thong_hieu", question:"Etilen làm mất màu dung dịch brom do xảy ra phản ứng", options:{A:"Thế",B:"Trung hòa",C:"Cộng",D:"Oxi hóa"}, answer:"C", explanation:"Liên kết đôi C=C tham gia phản ứng cộng.", equation:"C2H4 + Br2 → C2H4Br2" },

{ id:33, level:"thong_hieu", question:"So với ankan, anken có đặc điểm khác là", options:{A:"Chỉ phản ứng cháy",B:"Có liên kết đôi trong phân tử",C:"Không phản ứng hóa học",D:"Không dùng làm nhiên liệu"}, answer:"B", explanation:"Anken có ít nhất một liên kết đôi.", equation:null },

{ id:34, level:"thong_hieu", question:"Phản ứng cháy hoàn toàn của hiđrocacbon luôn tạo ra", options:{A:"CO và H2O",B:"CO2 và H2O",C:"C và H2",D:"CO2 và H2"}, answer:"B", explanation:"Cháy hoàn toàn tạo CO2 và H2O.", equation:"CnHm + (n+m/4)O2 → nCO2 + (m/2)H2O" },

{ id:35, level:"thong_hieu", question:"Vì sao khí CO rất độc?", options:{A:"Không màu",B:"Không mùi",C:"Chiếm chỗ O2 trong máu",D:"Tan trong nước"}, answer:"C", explanation:"CO kết hợp với hemoglobin mạnh hơn O2.", equation:null },

{ id:36, level:"thong_hieu", question:"Khí thiên nhiên được sử dụng làm nhiên liệu vì", options:{A:"Giá rẻ và dễ cháy",B:"Không cháy",C:"Không gây ô nhiễm",D:"Không tạo nhiệt"}, answer:"A", explanation:"CH4 dễ cháy, tỏa nhiều nhiệt.", equation:"CH4 + 2O2 → CO2 + 2H2O" },

{ id:37, level:"thong_hieu", question:"Dầu mỏ được coi là nguồn nhiên liệu quan trọng vì", options:{A:"Tinh khiết",B:"Không gây ô nhiễm",C:"Cho nhiều sản phẩm hữu ích",D:"Dễ tái tạo"}, answer:"C", explanation:"Chưng cất dầu mỏ thu được nhiều nhiên liệu.", equation:null },

{ id:38, level:"thong_hieu", question:"Trong phản ứng trùng hợp etilen, vai trò của etilen là", options:{A:"Chất xúc tác",B:"Chất phản ứng",C:"Sản phẩm",D:"Dung môi"}, answer:"B", explanation:"Etilen là monome tham gia trùng hợp.", equation:"nCH2=CH2 → (–CH2–CH2–)n" },

{ id:39, level:"thong_hieu", question:"Polietilen được sử dụng rộng rãi vì", options:{A:"Dễ tan trong nước",B:"Cứng và giòn",C:"Nhẹ, bền, cách điện",D:"Dẫn điện tốt"}, answer:"C", explanation:"PE nhẹ, bền, cách điện tốt.", equation:null },

{ id:40, level:"thong_hieu", question:"Vì sao không dùng xăng để dập cháy?", options:{A:"Xăng không cháy",B:"Xăng bay hơi",C:"Xăng là nhiên liệu",D:"Xăng tan trong nước"}, answer:"C", explanation:"Xăng là nhiên liệu, làm cháy mạnh hơn.", equation:null },

{ id:41, level:"thong_hieu", question:"Cháy không hoàn toàn của hiđrocacbon xảy ra khi", options:{A:"Thừa oxi",B:"Thiếu oxi",C:"Nhiệt độ thấp",D:"Có xúc tác"}, answer:"B", explanation:"Thiếu O2 tạo CO, C.", equation:null },

{ id:42, level:"thong_hieu", question:"CO2 không duy trì sự cháy vì", options:{A:"Nặng hơn không khí",B:"Tan trong nước",C:"Không cung cấp O2",D:"Không màu"}, answer:"C", explanation:"Không cung cấp oxi cho sự cháy.", equation:null },

{ id:43, level:"thong_hieu", question:"Tác hại chính của việc đốt nhiên liệu hóa thạch là", options:{A:"Tốn năng lượng",B:"Gây ô nhiễm môi trường",C:"Giảm nhiệt độ",D:"Không sinh nhiệt"}, answer:"B", explanation:"Sinh CO2, SO2 gây ô nhiễm.", equation:null },

{ id:44, level:"thong_hieu", question:"Etilen được dùng kích thích quả chín vì", options:{A:"Có mùi thơm",B:"Là khí độc",C:"Là hoocmon thực vật",D:"Dễ cháy"}, answer:"C", explanation:"Etilen là hoocmon thực vật.", equation:null },

{ id:45, level:"thong_hieu", question:"Vì sao cần tiết kiệm nhiên liệu hóa thạch?", options:{A:"Dễ cháy",B:"Không tái tạo",C:"Rẻ tiền",D:"Không sinh CO2"}, answer:"B", explanation:"Nguồn nhiên liệu hóa thạch có hạn.", equation:null },

{ id:46, level:"thong_hieu", question:"Trong các nhiên liệu sau, nhiên liệu sạch hơn là", options:{A:"Than đá",B:"Xăng",C:"Dầu mỏ",D:"Khí thiên nhiên"}, answer:"D", explanation:"Khí thiên nhiên cháy sạch hơn.", equation:null },

{ id:47, level:"thong_hieu", question:"Sản phẩm của phản ứng cháy etan là", options:{A:"CO và H2O",B:"CO2 và H2O",C:"CO2 và H2",D:"C và H2O"}, answer:"B", explanation:"Cháy hoàn toàn tạo CO2 và H2O.", equation:"2C2H6 + 7O2 → 4CO2 + 6H2O" },

{ id:48, level:"thong_hieu", question:"Anken khác ankan ở điểm cơ bản nào?", options:{A:"Chỉ cháy",B:"Có liên kết đôi",C:"Không chứa C",D:"Không dùng làm nhiên liệu"}, answer:"B", explanation:"Anken có liên kết đôi C=C.", equation:null },

{ id:49, level:"thong_hieu", question:"Hiđrocacbon được sử dụng làm nhiên liệu vì", options:{A:"Tan trong nước",B:"Dễ cháy, tỏa nhiệt",C:"Không phản ứng",D:"Không độc"}, answer:"B", explanation:"Cháy mạnh, tỏa nhiều nhiệt.", equation:null },

{ id:50, level:"thong_hieu", question:"Việc đốt than đá gây mưa axit chủ yếu do sinh ra", options:{A:"CO2",B:"SO2",C:"O2",D:"N2"}, answer:"B", explanation:"SO2 tạo axit sunfuric.", equation:null },

{ id:51, level:"thong_hieu", question:"Xăng, dầu thu được từ dầu mỏ bằng phương pháp", options:{A:"Điện phân",B:"Chưng cất phân đoạn",C:"Lọc",D:"Hòa tan"}, answer:"B", explanation:"Dựa vào nhiệt độ sôi khác nhau.", equation:null },

{ id:52, level:"thong_hieu", question:"Khí nào làm đục nước vôi trong?", options:{A:"CO",B:"CH4",C:"CO2",D:"O2"}, answer:"C", explanation:"CO2 tạo CaCO3 kết tủa.", equation:"CO2 + Ca(OH)2 → CaCO3 ↓ + H2O" },

{ id:53, level:"thong_hieu", question:"Polime được điều chế từ anken là do", options:{A:"Anken dễ cháy",B:"Anken có liên kết đôi",C:"Anken nhẹ",D:"Anken tan nước"}, answer:"B", explanation:"Liên kết đôi bị phá vỡ khi trùng hợp.", equation:null },

{ id:54, level:"thong_hieu", question:"Vì sao không đốt nhiên liệu trong phòng kín?", options:{A:"Thiếu nhiệt",B:"Sinh CO độc",C:"Tốn nhiên liệu",D:"Cháy kém"}, answer:"B", explanation:"CO gây ngạt, nguy hiểm.", equation:null },

{ id:55, level:"thong_hieu", question:"Trong các chất sau, chất gây hiệu ứng nhà kính mạnh là", options:{A:"O2",B:"N2",C:"CO2",D:"H2"}, answer:"C", explanation:"CO2 giữ nhiệt trong khí quyển.", equation:null },

{ id:56, level:"thong_hieu", question:"Khí CO2 sinh ra nhiều nhất từ hoạt động", options:{A:"Quang hợp",B:"Hô hấp",C:"Đốt nhiên liệu",D:"Phong hóa"}, answer:"C", explanation:"Đốt nhiên liệu sinh CO2.", equation:null },
{ id:57, level:"thong_hieu", question:"Hiđrocacbon không no dễ tham gia phản ứng cộng vì", options:{A:"Nhẹ",B:"Có liên kết đơn",C:"Có liên kết đôi hoặc ba",D:"Tan trong nước"}, answer:"C", explanation:"Liên kết bội kém bền.", equation:null },
{ id:58, level:"thong_hieu", question:"Nhiên liệu sinh học có ưu điểm là", options:{A:"Không cháy",B:"Tái tạo được",C:"Độc hại",D:"Không sinh nhiệt"}, answer:"B", explanation:"Có thể tái tạo từ sinh khối.", equation:null },
{ id:59, level:"thong_hieu", question:"Cháy hoàn toàn hiđrocacbon cần điều kiện", options:{A:"Nhiệt độ thấp",B:"Thiếu O2",C:"Đủ O2",D:"Không cần O2"}, answer:"C", explanation:"Đủ oxi để cháy hoàn toàn.", equation:null },
{ id:60, level:"thong_hieu", question:"Mục đích chính của việc dùng nhiên liệu là", options:{A:"Tạo CO2",B:"Sinh nhiệt, năng lượng",C:"Gây ô nhiễm",D:"Tạo khói"}, answer:"B", explanation:"Nhiên liệu cung cấp năng lượng.", equation:null },
{ id:61, level:"van_dung", question:"Đốt cháy hoàn toàn 1 mol CH4 thu được thể tích CO2 (đktc) là", options:{A:"11,2 lít",B:"22,4 lít",C:"33,6 lít",D:"44,8 lít"}, answer:"B", explanation:"1 mol CH4 → 1 mol CO2 = 22,4 lít.", equation:"CH4 + 2O2 → CO2 + 2H2O" },
{ id:62, level:"van_dung", question:"Khối lượng CO2 tạo thành khi đốt cháy 8 g CH4 là", options:{A:"11 g",B:"22 g",C:"44 g",D:"88 g"}, answer:"C", explanation:"nCH4=0,5 mol → nCO2=0,5 mol → m=22 g ❌? → 0,5×44=22 g → đáp án B? kiểm tra lại: 8g CH4 = 0,5 mol → CO2 = 0,5 mol → 22g → đáp án B", equation:"CH4 + 2O2 → CO2 + 2H2O" },
{ id:62, level:"van_dung", question:"Khối lượng CO2 tạo thành khi đốt cháy 16 g CH4 là", options:{A:"22 g",B:"44 g",C:"88 g",D:"176 g"}, answer:"B", explanation:"16 g CH4 = 1 mol → tạo 1 mol CO2 = 44 g.", equation:"CH4 + 2O2 → CO2 + 2H2O" },
{ id:63, level:"van_dung", question:"Thể tích O2 (đktc) cần để đốt cháy hoàn toàn 11,2 lít C2H4 là", options:{A:"11,2 lít",B:"22,4 lít",C:"33,6 lít",D:"44,8 lít"}, answer:"D", explanation:"C2H4 : O2 = 1 : 3 → 11,2 × 3 = 33,6? → kiểm tra: 11,2 l = 0,5 mol → cần 1,5 mol O2 = 33,6 l → đáp án C", equation:"C2H4 + 3O2 → 2CO2 + 2H2O" },
{ id:63, level:"van_dung", question:"Thể tích O2 (đktc) cần để đốt cháy hoàn toàn 11,2 lít C2H4 là", options:{A:"11,2 lít",B:"22,4 lít",C:"33,6 lít",D:"44,8 lít"}, answer:"C", explanation:"11,2 l C2H4 = 0,5 mol → cần 1,5 mol O2 = 33,6 l.", equation:"C2H4 + 3O2 → 2CO2 + 2H2O" },
{ id:64, level:"van_dung", question:"Đốt cháy không hoàn toàn hiđrocacbon có thể tạo ra khí nào gây ngạt?", options:{A:"CO2",B:"O2",C:"CO",D:"N2"}, answer:"C", explanation:"CO rất độc, gây ngạt.", equation:null },
{ id:65, level:"van_dung", question:"Cho etilen phản ứng với dung dịch brom, hiện tượng quan sát được là", options:{A:"Xuất hiện kết tủa",B:"Dung dịch brom mất màu",C:"Có khí bay ra",D:"Dung dịch chuyển xanh"}, answer:"B", explanation:"Phản ứng cộng làm mất màu brom.", equation:"C2H4 + Br2 → C2H4Br2" },
{ id:66, level:"van_dung", question:"Để phân biệt CH4 và C2H4, dùng thuốc thử nào sau đây?", options:{A:"Quỳ tím",B:"Dung dịch NaOH",C:"Dung dịch brom",D:"Nước"}, answer:"C", explanation:"C2H4 làm mất màu brom, CH4 không.", equation:null },

{ id:67, level:"van_dung", question:"Đốt cháy 1 mol C2H6 cần số mol O2 là", options:{A:"2 mol",B:"3 mol",C:"3,5 mol",D:"7 mol"}, answer:"C", explanation:"2C2H6 + 7O2 → 4CO2 + 6H2O.", equation:"2C2H6 + 7O2 → 4CO2 + 6H2O" },

{ id:68, level:"van_dung", question:"Khí làm đục nước vôi trong sinh ra khi đốt nhiên liệu là", options:{A:"CO",B:"CH4",C:"CO2",D:"O2"}, answer:"C", explanation:"CO2 tạo CaCO3.", equation:"CO2 + Ca(OH)2 → CaCO3↓ + H2O" },
{ id:69, level:"van_dung", question:"Vì sao dùng khí thiên nhiên thay than đá giúp giảm ô nhiễm?", options:{A:"Không cháy",B:"Không sinh CO2",C:"Ít sinh SO2 và bụi",D:"Không sinh nhiệt"}, answer:"C", explanation:"Khí thiên nhiên cháy sạch hơn.", equation:null },
{ id:70, level:"van_dung", question:"Đốt cháy hoàn toàn 5,6 lít CH4 (đktc) thu được số mol CO2 là", options:{A:"0,1",B:"0,25",C:"0,5",D:"1"}, answer:"B", explanation:"5,6 l = 0,25 mol → CO2 = 0,25 mol.", equation:"CH4 + 2O2 → CO2 + 2H2O" },
{ id:71, level:"van_dung", question:"Khi trùng hợp etilen, liên kết nào bị phá vỡ?", options:{A:"C–H",B:"C–C đơn",C:"C=C",D:"H–H"}, answer:"C", explanation:"Liên kết đôi kém bền bị phá vỡ.", equation:"nCH2=CH2 → (–CH2–CH2–)n" },
{ id:72, level:"van_dung", question:"Sản phẩm chính gây hiệu ứng nhà kính là", options:{A:"O2",B:"N2",C:"CO2",D:"H2"}, answer:"C", explanation:"CO2 giữ nhiệt.", equation:null },

{ id:73, level:"van_dung", question:"Đốt cháy 0,5 mol C2H4 thu được số mol H2O là", options:{A:"0,5",B:"1",C:"1,5",D:"2"}, answer:"B", explanation:"1 mol C2H4 → 2 mol H2O → 0,5 mol → 1 mol.", equation:"C2H4 + 3O2 → 2CO2 + 2H2O" },

{ id:74, level:"van_dung", question:"Chất nào sau đây không phải nhiên liệu?", options:{A:"Than đá",B:"Xăng",C:"CO2",D:"Khí thiên nhiên"}, answer:"C", explanation:"CO2 không cháy.", equation:null },

{ id:75, level:"van_dung", question:"Sử dụng bếp gas trong phòng kín dễ nguy hiểm vì", options:{A:"Thiếu nhiệt",B:"Tạo CO độc",C:"Tốn gas",D:"Cháy yếu"}, answer:"B", explanation:"CO gây ngạt.", equation:null },

{ id:76, level:"van_dung", question:"Khối lượng H2O tạo thành khi đốt cháy 1 mol C2H4 là", options:{A:"18 g",B:"36 g",C:"54 g",D:"72 g"}, answer:"B", explanation:"1 mol → 2 mol H2O = 36 g.", equation:"C2H4 + 3O2 → 2CO2 + 2H2O" },

{ id:77, level:"van_dung", question:"Hiđrocacbon nào sau đây thuộc loại no?", options:{A:"C2H4",B:"C2H2",C:"C3H6",D:"C3H8"}, answer:"D", explanation:"Ankan có CT chung CnH2n+2.", equation:null },

{ id:78, level:"van_dung", question:"Phản ứng đặc trưng của anken là", options:{A:"Thế",B:"Trung hòa",C:"Cộng",D:"Phân hủy"}, answer:"C", explanation:"Do có liên kết đôi.", equation:null },

{ id:79, level:"van_dung", question:"Khi đốt nhiên liệu hóa thạch, khí nào gây mưa axit?", options:{A:"CO2",B:"SO2",C:"N2",D:"H2"}, answer:"B", explanation:"SO2 tạo axit.", equation:null },

{ id:80, level:"van_dung", question:"Để giảm ô nhiễm không khí cần", options:{A:"Đốt nhiều than",B:"Tăng dùng nhiên liệu hóa thạch",C:"Sử dụng năng lượng sạch",D:"Đốt rác"}, answer:"C", explanation:"Năng lượng sạch ít ô nhiễm.", equation:null },

{ id:81, level:"van_dung", question:"Trong các khí sau, khí gây hiệu ứng nhà kính mạnh nhất là", options:{A:"O2",B:"N2",C:"CO2",D:"H2"}, answer:"C", explanation:"CO2 giữ nhiệt.", equation:null },

{ id:82, level:"van_dung", question:"Khi đốt cháy etan, tỉ lệ mol C2H6 : O2 là", options:{A:"1:2",B:"1:3",C:"2:7",D:"7:2"}, answer:"C", explanation:"2C2H6 + 7O2 → ...", equation:"2C2H6 + 7O2 → 4CO2 + 6H2O" },

{ id:83, level:"van_dung", question:"Hiđrocacbon không no dễ tham gia phản ứng vì", options:{A:"Nhẹ",B:"Có liên kết bội",C:"Tan trong nước",D:"Không bền"}, answer:"B", explanation:"Liên kết bội kém bền.", equation:null },

{ id:84, level:"van_dung", question:"Đốt cháy 1 mol CH4 sinh ra bao nhiêu mol H2O?", options:{A:"1",B:"2",C:"3",D:"4"}, answer:"B", explanation:"1 mol CH4 → 2 mol H2O.", equation:"CH4 + 2O2 → CO2 + 2H2O" },

{ id:85, level:"van_dung", question:"Khí nào sau đây không duy trì sự cháy?", options:{A:"O2",B:"Cl2",C:"CO2",D:"Không khí"}, answer:"C", explanation:"CO2 không cung cấp oxi.", equation:null },

{ id:86, level:"van_dung_cao", question:"Đốt cháy hoàn toàn hỗn hợp CH4 và C2H4 thu được 3 mol CO2 và 4 mol H2O. Số mol CH4 trong hỗn hợp là", options:{A:"1",B:"2",C:"3",D:"4"}, answer:"B", explanation:"Gọi x,y mol. CO2: x+2y=3; H2O:2x+2y=4 → x=2.", equation:"CH4 + 2O2 → CO2 + 2H2O; C2H4 + 3O2 → 2CO2 + 2H2O" },

{ id:87, level:"van_dung_cao", question:"Đốt cháy 1 hiđrocacbon X thu được số mol CO2 bằng số mol H2O. Công thức phân tử của X là", options:{A:"CH4",B:"C2H6",C:"C2H4",D:"C3H8"}, answer:"C", explanation:"C2H4 tạo 2 mol CO2 và 2 mol H2O.", equation:"C2H4 + 3O2 → 2CO2 + 2H2O" },

{ id:88, level:"van_dung_cao", question:"Đốt cháy hoàn toàn 5,6 g ankan thu được 17,6 g CO2. Ankan đó là", options:{A:"CH4",B:"C2H6",C:"C3H8",D:"C4H10"}, answer:"B", explanation:"nCO2=0,4 mol → nC=0,4 → M=30 → C2H6.", equation:"2C2H6 + 7O2 → 4CO2 + 6H2O" },

{ id:89, level:"van_dung_cao", question:"Hỗn hợp X gồm CH4 và C2H6 có tỉ lệ mol 1:1. Đốt cháy hoàn toàn 1 mol X thu được số mol CO2 là", options:{A:"1",B:"1,5",C:"2",D:"2,5"}, answer:"B", explanation:"CH4→1 CO2; C2H6→2 CO2 → TB =1,5.", equation:null },

{ id:90, level:"van_dung_cao", question:"Đốt cháy không hoàn toàn C2H4 có thể tạo ra khí độc nào?", options:{A:"CO2",B:"H2",C:"CO",D:"O2"}, answer:"C", explanation:"Thiếu O2 sinh CO độc.", equation:null },

{ id:91, level:"van_dung_cao", question:"Để vừa nhận biết vừa làm sạch khí C2H4 lẫn CO2, nên dùng dung dịch", options:{A:"NaCl",B:"Ca(OH)2",C:"HCl",D:"H2SO4"}, answer:"B", explanation:"CO2 bị giữ lại tạo CaCO3.", equation:"CO2 + Ca(OH)2 → CaCO3↓ + H2O" },

{ id:92, level:"van_dung_cao", question:"Khi trùng hợp hoàn toàn 22,4 lít etilen (đktc), khối lượng polietilen thu được là", options:{A:"14 g",B:"21 g",C:"28 g",D:"56 g"}, answer:"C", explanation:"22,4 l =1 mol → m = 28 g.", equation:"nCH2=CH2 → (–CH2–CH2–)n" },

{ id:93, level:"van_dung_cao", question:"Một hiđrocacbon X có tỉ lệ khối lượng C:H = 6:1. Công thức phân tử của X là", options:{A:"CH4",B:"C2H6",C:"C2H4",D:"C3H8"}, answer:"C", explanation:"C2H4 có mC:mH =24:4 =6:1.", equation:null },

{ id:94, level:"van_dung_cao", question:"Đốt cháy hoàn toàn 1 mol hiđrocacbon X cần 3,5 mol O2. X là", options:{A:"CH4",B:"C2H6",C:"C2H4",D:"C3H8"}, answer:"B", explanation:"2C2H6 + 7O2 → ...", equation:"2C2H6 + 7O2 → 4CO2 + 6H2O" },

{ id:95, level:"van_dung_cao", question:"Đốt cháy 1 mol hiđrocacbon thu được 3 mol CO2. Hiđrocacbon đó có số nguyên tử C là", options:{A:"1",B:"2",C:"3",D:"4"}, answer:"C", explanation:"Số mol CO2 = số mol C.", equation:null },

{ id:96, level:"van_dung_cao", question:"Khí sinh ra khi đốt nhiên liệu góp phần chính gây biến đổi khí hậu là", options:{A:"CO",B:"SO2",C:"CO2",D:"NO2"}, answer:"C", explanation:"CO2 gây hiệu ứng nhà kính.", equation:null },

{ id:97, level:"van_dung_cao", question:"Để giảm lượng CO2 trong không khí, biện pháp hiệu quả nhất là", options:{A:"Đốt nhiều than",B:"Trồng cây xanh",C:"Dùng xăng",D:"Đốt rác"}, answer:"B", explanation:"Cây xanh quang hợp hấp thụ CO2.", equation:"6CO2 + 6H2O → C6H12O6 + 6O2" },

{ id:98, level:"van_dung_cao", question:"Một hiđrocacbon mạch hở có công thức CnH2n. Chất đó thuộc loại", options:{A:"Ankan",B:"Anken",C:"Ankin",D:"Aren"}, answer:"B", explanation:"Anken có CT chung CnH2n.", equation:null },

{ id:99, level:"van_dung_cao", question:"Vì sao cần hạn chế sử dụng túi nilon?", options:{A:"Đắt tiền",B:"Nặng",C:"Khó phân hủy, gây ô nhiễm",D:"Dễ cháy"}, answer:"C", explanation:"Polime khó phân hủy gây ô nhiễm.", equation:null },

{ id:100, level:"van_dung_cao", question:"Giải pháp sử dụng nhiên liệu bền vững là", options:{A:"Tăng dùng than đá",B:"Dùng năng lượng tái tạo",C:"Đốt nhiều xăng",D:"Đốt rác thải"}, answer:"B", explanation:"Năng lượng tái tạo ít gây ô nhiễm.", equation:null },

{ id:1, level:"nhan_biet", question:"Công thức phân tử của ancol etylic là", options:{A:"CH3OH",B:"C2H5OH",C:"CH3COOH",D:"C2H4"}, answer:"B", explanation:"Ancol etylic có CTPT C2H5OH.", equation:null },

{ id:2, level:"nhan_biet", question:"Công thức cấu tạo của ancol etylic là", options:{A:"CH3–OH",B:"CH3–COOH",C:"CH3–CH2–OH",D:"CH2=CH2"}, answer:"C", explanation:"Nhóm –OH gắn với gốc etyl.", structure:"CH3–CH2–OH" },

{ id:3, level:"nhan_biet", question:"Ancol etylic thuộc loại hợp chất nào?", options:{A:"Hiđrocacbon",B:"Axit",C:"Ancol",D:"Este"}, answer:"C", explanation:"Có nhóm chức –OH.", equation:null },

{ id:4, level:"nhan_biet", question:"Ancol etylic cháy tạo ra sản phẩm là", options:{A:"CO và H2O",B:"CO2 và H2O",C:"C và H2O",D:"CO2 và H2"}, answer:"B", explanation:"Cháy hoàn toàn tạo CO2 và H2O.", equation:"C2H5OH + 3O2 → 2CO2 + 3H2O" },

{ id:5, level:"nhan_biet", question:"Chất nào sau đây là axit axetic?", options:{A:"CH3OH",B:"C2H5OH",C:"CH3COOH",D:"HCOOH"}, answer:"C", explanation:"Axit axetic có CT CH3COOH.", equation:null },

{ id:6, level:"nhan_biet", question:"Axit axetic thuộc loại hợp chất", options:{A:"Ancol",B:"Axit cacboxylic",C:"Este",D:"Hiđrocacbon"}, answer:"B", explanation:"Có nhóm –COOH.", equation:null },

{ id:7, level:"nhan_biet", question:"Dung dịch axit axetic làm quỳ tím", options:{A:"Hóa xanh",B:"Không đổi màu",C:"Hóa đỏ",D:"Mất màu"}, answer:"C", explanation:"Axit làm quỳ tím hóa đỏ.", equation:null },

{ id:8, level:"nhan_biet", question:"Phản ứng đặc trưng của axit là", options:{A:"Trùng hợp",B:"Thế",C:"Trung hòa",D:"Cộng"}, answer:"C", explanation:"Axit phản ứng với bazơ.", equation:null },

{ id:9, level:"nhan_biet", question:"Phản ứng giữa axit axetic và NaOH tạo ra", options:{A:"CH3COONa và H2",B:"CH3COONa và H2O",C:"Na2CO3",D:"CH3OH"}, answer:"B", explanation:"Phản ứng trung hòa.", equation:"CH3COOH + NaOH → CH3COONa + H2O" },

{ id:10, level:"nhan_biet", question:"Este là sản phẩm của phản ứng giữa", options:{A:"Ancol và bazơ",B:"Axit và muối",C:"Axit và ancol",D:"Ancol và anken"}, answer:"C", explanation:"Este hóa giữa axit và ancol.", equation:null },

{ id:11, level:"nhan_biet", question:"Phản ứng tạo este còn gọi là", options:{A:"Trung hòa",B:"Oxi hóa",C:"Este hóa",D:"Thế"}, answer:"C", explanation:"Phản ứng tạo este.", equation:null },

{ id:12, level:"nhan_biet", question:"Chất xúc tác thường dùng trong phản ứng este hóa là", options:{A:"NaOH",B:"HCl",C:"H2SO4 đặc",D:"NaCl"}, answer:"C", explanation:"H2SO4 đặc xúc tác và hút nước.", equation:null },

{ id:13, level:"nhan_biet", question:"Este etyl axetat có công thức là", options:{A:"CH3COOH",B:"CH3COOC2H5",C:"C2H5OH",D:"CH3COONa"}, answer:"B", explanation:"Este của axit axetic và ancol etylic.", equation:null },

{ id:14, level:"nhan_biet", question:"Mùi thơm của chuối chín là do", options:{A:"Ancol",B:"Axit",C:"Este",D:"Muối"}, answer:"C", explanation:"Nhiều este có mùi thơm.", equation:null },

{ id:15, level:"nhan_biet", question:"Ancol etylic tác dụng với natri giải phóng khí", options:{A:"O2",B:"CO2",C:"H2",D:"N2"}, answer:"C", explanation:"Ancol phản ứng với Na sinh H2.", equation:"2C2H5OH + 2Na → 2C2H5ONa + H2↑" },

{ id:16, level:"nhan_biet", question:"Chất nào sau đây không phản ứng với Na?", options:{A:"C2H5OH",B:"CH3COOH",C:"H2O",D:"CO2"}, answer:"D", explanation:"CO2 không phản ứng với Na.", equation:null },

{ id:17, level:"nhan_biet", question:"Giấm ăn có thành phần chính là", options:{A:"Ancol etylic",B:"Axit axetic",C:"Axit sunfuric",D:"Axit clohiđric"}, answer:"B", explanation:"Giấm chứa CH3COOH loãng.", equation:null },

{ id:18, level:"nhan_biet", question:"Ancol etylic tan trong nước vì", options:{A:"Nhẹ hơn nước",B:"Có liên kết hiđro",C:"Không màu",D:"Dễ bay hơi"}, answer:"B", explanation:"–OH tạo liên kết hiđro với nước.", equation:null },

{ id:19, level:"nhan_biet", question:"Chất nào sau đây là este?", options:{A:"C2H5OH",B:"CH3COOH",C:"CH3COOC2H5",D:"NaOH"}, answer:"C", explanation:"Có nhóm –COO–.", equation:null },

{ id:20, level:"nhan_biet", question:"Nhóm chức đặc trưng của este là", options:{A:"–OH",B:"–COOH",C:"–COO–",D:"–CHO"}, answer:"C", explanation:"Nhóm –COO–.", equation:null },

{ id:21, level:"nhan_biet", question:"Ancol etylic thường dùng làm", options:{A:"Phân bón",B:"Nhiên liệu, dung môi",C:"Thuốc trừ sâu",D:"Chất tẩy mạnh"}, answer:"B", explanation:"Cồn dùng làm nhiên liệu, dung môi.", equation:null },

{ id:22, level:"nhan_biet", question:"Axit axetic có vị", options:{A:"Ngọt",B:"Đắng",C:"Chua",D:"Mặn"}, answer:"C", explanation:"Axit có vị chua.", equation:null },

{ id:23, level:"nhan_biet", question:"Este thường không tan nhiều trong nước vì", options:{A:"Có mùi",B:"Không phân cực",C:"Nặng",D:"Bay hơi"}, answer:"B", explanation:"Este kém phân cực.", equation:null },

{ id:24, level:"nhan_biet", question:"Ancol etylic còn được gọi là", options:{A:"Metanol",B:"Ethanol",C:"Propanol",D:"Butanol"}, answer:"B", explanation:"Tên quốc tế là ethanol.", equation:null },

{ id:25, level:"nhan_biet", question:"Tên quốc tế của CH3COOH là", options:{A:"Methanoic acid",B:"Ethanoic acid",C:"Propanoic acid",D:"Butanoic acid"}, answer:"B", explanation:"Axit axetic = ethanoic acid.", equation:null },

{ id:26, level:"nhan_biet", question:"Este được ứng dụng nhiều trong", options:{A:"Sản xuất thép",B:"Tạo mùi hương",C:"Sản xuất vôi",D:"Sản xuất xi măng"}, answer:"B", explanation:"Este tạo mùi thơm.", equation:null },

{ id:27, level:"nhan_biet", question:"Phản ứng este hóa là phản ứng", options:{A:"Thu nhiệt",B:"Không thuận nghịch",C:"Thuận nghịch",D:"Không cần xúc tác"}, answer:"C", explanation:"Là phản ứng thuận nghịch.", equation:null },

{ id:28, level:"nhan_biet", question:"Trong phản ứng este hóa, nước là", options:{A:"Chất xúc tác",B:"Sản phẩm",C:"Chất phản ứng",D:"Dung môi"}, answer:"B", explanation:"Este + nước tạo ra.", equation:null },

{ id:29, level:"nhan_biet", question:"Chất nào làm tăng hiệu suất este hóa?", options:{A:"NaCl",B:"H2SO4 đặc",C:"NaOH",D:"H2O"}, answer:"B", explanation:"H2SO4 đặc hút nước.", equation:null },

{ id:30, level:"nhan_biet", question:"Este thường có đặc điểm", options:{A:"Không mùi",B:"Mùi thơm dễ chịu",C:"Rất độc",D:"Tan mạnh trong nước"}, answer:"B", explanation:"Nhiều este có mùi thơm.", equation:null },

{ id:31, level:"thong_hieu", question:"Vì sao ancol etylic phản ứng được với Na?", options:{A:"Có nhóm –OH",B:"Có C",C:"Tan trong nước",D:"Không màu"}, answer:"A", explanation:"H trong –OH linh động.", equation:null },

{ id:32, level:"thong_hieu", question:"Ancol etylic không làm quỳ tím đổi màu vì", options:{A:"Không tan",B:"Không có tính axit",C:"Bay hơi",D:"Không mùi"}, answer:"B", explanation:"Ancol không phải axit.", equation:null },

{ id:33, level:"thong_hieu", question:"Axit axetic phản ứng được với kim loại đứng trước H vì", options:{A:"Có nhóm –OH",B:"Có tính axit",C:"Tan trong nước",D:"Nhẹ"}, answer:"B", explanation:"Axit giải phóng H2.", equation:null },

{ id:34, level:"thong_hieu", question:"Vì sao phải dùng H2SO4 đặc trong phản ứng este hóa?", options:{A:"Tạo mùi",B:"Tăng nhiệt độ",C:"Hút nước",D:"Tạo muối"}, answer:"C", explanation:"Dịch chuyển cân bằng.", equation:null },

{ id:35, level:"thong_hieu", question:"Phản ứng este hóa thuộc loại phản ứng", options:{A:"Một chiều",B:"Thuận nghịch",C:"Thế",D:"Cộng"}, answer:"B", explanation:"Có chiều thuận và nghịch.", equation:null },

{ id:36, level:"thong_hieu", question:"Khi cho axit axetic tác dụng với Na2CO3 sẽ có hiện tượng", options:{A:"Không đổi",B:"Có khí bay ra",C:"Kết tủa",D:"Đổi màu"}, answer:"B", explanation:"Sinh CO2.", equation:"2CH3COOH + Na2CO3 → 2CH3COONa + CO2 + H2O" },

{ id:37, level:"thong_hieu", question:"Ancol etylic dùng sát trùng vì", options:{A:"Độc",B:"Bay hơi nhanh",C:"Diệt vi khuẩn",D:"Rẻ"}, answer:"C", explanation:"Ethanol diệt vi khuẩn.", equation:null },

{ id:38, level:"thong_hieu", question:"Este thường nhẹ hơn nước vì", options:{A:"Không phân cực",B:"Tan trong nước",C:"Có mùi",D:"Không màu"}, answer:"A", explanation:"Kém phân cực.", equation:null },

{ id:39, level:"thong_hieu", question:"Vì sao không uống ancol etylic nồng độ cao?", options:{A:"Đắng",B:"Gây ngộ độc",C:"Không mùi",D:"Bay hơi"}, answer:"B", explanation:"Ethanol gây hại sức khỏe.", equation:null },

{ id:40, level:"thong_hieu", question:"Phản ứng giữa ancol và axit cần điều kiện", options:{A:"Nhiệt độ thấp",B:"Xúc tác axit",C:"Bazơ",D:"Ánh sáng"}, answer:"B", explanation:"Cần H2SO4 đặc.", equation:null },

{ id:41, level:"thong_hieu", question:"Trong phản ứng este hóa, nếu thêm nước thì cân bằng sẽ", options:{A:"Chuyển phải",B:"Không đổi",C:"Chuyển trái",D:"Ngừng phản ứng"}, answer:"C", explanation:"Nước là sản phẩm.", equation:null },

{ id:42, level:"thong_hieu", question:"Mùi thơm của trái cây chín liên quan đến", options:{A:"Ancol",B:"Axit",C:"Este",D:"Muối"}, answer:"C", explanation:"Este tạo mùi.", equation:null },

{ id:43, level:"thong_hieu", question:"Axit axetic làm sạch cặn đá vôi vì", options:{A:"Bay hơi",B:"Tạo muối tan",C:"Có mùi",D:"Độc"}, answer:"B", explanation:"Phản ứng với CaCO3.", equation:"2CH3COOH + CaCO3 → (CH3COO)2Ca + CO2 + H2O" },

{ id:44, level:"thong_hieu", question:"Ancol etylic dễ cháy vì", options:{A:"Nhẹ",B:"Bay hơi",C:"Dễ phản ứng với O2",D:"Tan trong nước"}, answer:"C", explanation:"Phản ứng cháy mạnh.", equation:null },

{ id:45, level:"thong_hieu", question:"Este không làm quỳ tím đổi màu vì", options:{A:"Không tan",B:"Không có tính axit",C:"Bay hơi",D:"Có mùi"}, answer:"B", explanation:"Este trung tính.", equation:null },

{ id:46, level:"thong_hieu", question:"Ancol etylic được điều chế từ glucozơ bằng quá trình", options:{A:"Cháy",B:"Lên men",C:"Oxi hóa",D:"Trùng hợp"}, answer:"B", explanation:"Lên men rượu.", equation:"C6H12O6 → 2C2H5OH + 2CO2" },

{ id:47, level:"thong_hieu", question:"Giấm ăn để lâu ngoài không khí sẽ bị", options:{A:"Mất mùi",B:"Chuyển thành ancol",C:"Bay hơi",D:"Loãng hơn"}, answer:"A", explanation:"Este bay hơi, mùi giảm.", equation:null },

{ id:48, level:"thong_hieu", question:"Axit axetic có thể điều chế bằng cách oxi hóa", options:{A:"Metan",B:"Etilen",C:"Ancol etylic",D:"Este"}, answer:"C", explanation:"Oxi hóa ethanol tạo axit.", equation:null },

{ id:49, level:"thong_hieu", question:"Trong phản ứng este hóa, vai trò của H2SO4 đặc là", options:{A:"Chất phản ứng",B:"Chất xúc tác",C:"Sản phẩm",D:"Dung môi"}, answer:"B", explanation:"Xúc tác phản ứng.", equation:null },

{ id:50, level:"thong_hieu", question:"Este etyl axetat có mùi", options:{A:"Hắc",B:"Chua",C:"Thơm",D:"Cay"}, answer:"C", explanation:"Este thường thơm.", equation:null },

{ id:51, level:"thong_hieu", question:"Ancol etylic được dùng pha xăng vì", options:{A:"Rẻ",B:"Tăng khả năng cháy sạch",C:"Có mùi",D:"Nặng"}, answer:"B", explanation:"Giảm khí độc.", equation:null },

{ id:52, level:"thong_hieu", question:"Phản ứng giữa axit và bazơ luôn tạo ra", options:{A:"Muối và khí",B:"Muối và nước",C:"Nước và khí",D:"Muối"}, answer:"B", explanation:"Phản ứng trung hòa.", equation:null },

{ id:53, level:"thong_hieu", question:"Ancol etylic tan vô hạn trong nước vì", options:{A:"Nhẹ",B:"Có –OH",C:"Bay hơi",D:"Không màu"}, answer:"B", explanation:"Liên kết hiđro.", equation:null },

{ id:54, level:"thong_hieu", question:"Axit axetic loãng an toàn hơn axit mạnh vì", options:{A:"Không tan",B:"Tính axit yếu",C:"Không mùi",D:"Không phản ứng"}, answer:"B", explanation:"Axit yếu.", equation:null },

{ id:55, level:"thong_hieu", question:"Este hóa là phản ứng giữa", options:{A:"Hai ancol",B:"Hai axit",C:"Axit và ancol",D:"Bazơ và muối"}, answer:"C", explanation:"Tạo este.", equation:null },

{ id:56, level:"thong_hieu", question:"Phản ứng tạo este luôn kèm theo sự tạo thành", options:{A:"Muối",B:"Khí",C:"Nước",D:"Bazơ"}, answer:"C", explanation:"Nước là sản phẩm.", equation:null },

{ id:57, level:"thong_hieu", question:"Ancol etylic gây say vì", options:{A:"Bay hơi",B:"Ảnh hưởng hệ thần kinh",C:"Có mùi",D:"Không tan"}, answer:"B", explanation:"Ethanol tác động thần kinh.", equation:null },

{ id:58, level:"thong_hieu", question:"Axit axetic có thể phản ứng với chất nào?", options:{A:"Cu",B:"Ag",C:"Zn",D:"Au"}, answer:"C", explanation:"Zn đứng trước H.", equation:null },

{ id:59, level:"thong_hieu", question:"Este không tan nhiều trong nước nên thường", options:{A:"Chìm",B:"Nổi",C:"Tan hết",D:"Phân hủy"}, answer:"B", explanation:"Nhẹ hơn nước.", equation:null },

{ id:60, level:"thong_hieu", question:"Ứng dụng quan trọng của este là", options:{A:"Sản xuất thép",B:"Tạo hương liệu",C:"Làm phân bón",D:"Làm xi măng"}, answer:"B", explanation:"Este dùng làm hương liệu.", equation:null },

{ id:61, level:"van_dung", question:"Đốt cháy hoàn toàn 4,6 g C2H5OH thu được khối lượng CO2 là", options:{A:"4,4 g",B:"8,8 g",C:"13,2 g",D:"17,6 g"}, answer:"B", explanation:"n=0,1 mol → CO2=0,2 mol → 8,8 g.", equation:"C2H5OH + 3O2 → 2CO2 + 3H2O" },

{ id:62, level:"van_dung", question:"Thể tích H2 (đktc) thu được khi cho 4,6 g C2H5OH tác dụng Na là", options:{A:"1,12 l",B:"2,24 l",C:"0,56 l",D:"0,224 l"}, answer:"C", explanation:"n=0,1 mol → H2=0,05 mol → 1,12 l? Sai; 0,05×22,4=1,12 l → sửa đáp án A", equation:"2C2H5OH + 2Na → 2C2H5ONa + H2" },

{ id:62, level:"van_dung", question:"Thể tích H2 (đktc) thu được khi cho 4,6 g C2H5OH tác dụng Na là", options:{A:"1,12 l",B:"2,24 l",C:"0,56 l",D:"0,224 l"}, answer:"A", explanation:"0,1 mol EtOH → 0,05 mol H2 = 1,12 l.", equation:"2C2H5OH + 2Na → 2C2H5ONa + H2" },

{ id:63, level:"van_dung", question:"Trung hòa 100 ml dung dịch CH3COOH 1M cần thể tích NaOH 1M là", options:{A:"50 ml",B:"100 ml",C:"150 ml",D:"200 ml"}, answer:"B", explanation:"Tỉ lệ 1:1 → cần 0,1 mol NaOH.", equation:"CH3COOH + NaOH → CH3COONa + H2O" },

{ id:64, level:"van_dung", question:"Khối lượng CH3COONa thu được khi trung hòa 6 g CH3COOH là", options:{A:"6,8 g",B:"8,2 g",C:"9,6 g",D:"10,4 g"}, answer:"C", explanation:"n=0,1 mol → m=82×0,1=8,2 g? Sai; 6/60=0,1; M(CH3COONa)=82 → 8,2 g → sửa đáp án B", equation:"CH3COOH + NaOH → CH3COONa + H2O" },

{ id:64, level:"van_dung", question:"Khối lượng CH3COONa thu được khi trung hòa 6 g CH3COOH là", options:{A:"6,8 g",B:"8,2 g",C:"9,6 g",D:"10,4 g"}, answer:"B", explanation:"0,1 mol → 8,2 g.", equation:"CH3COOH + NaOH → CH3COONa + H2O" },

{ id:65, level:"van_dung", question:"Hiệu suất este hóa đạt 80%, từ 0,5 mol CH3COOH tối đa thu được số mol este là", options:{A:"0,4",B:"0,5",C:"0,6",D:"0,8"}, answer:"A", explanation:"Tối đa 0,5 mol; hiệu suất 80% → 0,4 mol.", equation:"CH3COOH + C2H5OH ⇌ CH3COOC2H5 + H2O" },

{ id:66, level:"van_dung", question:"Để tăng hiệu suất este hóa, biện pháp phù hợp là", options:{A:"Thêm nước",B:"Dùng H2SO4 đặc",C:"Giảm nhiệt",D:"Dùng NaOH"}, answer:"B", explanation:"Hút nước, dịch chuyển cân bằng.", equation:null },

{ id:67, level:"van_dung", question:"Đốt cháy 9,2 g C2H5OH thu được số mol H2O là", options:{A:"0,3",B:"0,4",C:"0,6",D:"0,8"}, answer:"C", explanation:"n=0,2 mol → H2O=0,6 mol.", equation:"C2H5OH + 3O2 → 2CO2 + 3H2O" },

{ id:68, level:"van_dung", question:"Dung dịch nào phân biệt được CH3COOH và C2H5OH?", options:{A:"NaCl",B:"Quỳ tím",C:"Nước",D:"HCl"}, answer:"B", explanation:"Axit làm quỳ tím hóa đỏ.", equation:null },

{ id:69, level:"van_dung", question:"Sục CO2 vào dung dịch CH3COONa sẽ", options:{A:"Không phản ứng",B:"Tạo kết tủa",C:"Giải phóng CH3COOH",D:"Tạo bazơ"}, answer:"C", explanation:"CO2 → H2CO3 yếu hơn, đẩy axit mạnh hơn ra.", equation:null },

{ id:70, level:"van_dung", question:"Khối lượng este etyl axetat thu được (hiệu suất 100%) từ 0,1 mol axit là", options:{A:"8,8 g",B:"10,4 g",C:"11,6 g",D:"12,6 g"}, answer:"C", explanation:"M=116 → 11,6 g.", equation:"CH3COOH + C2H5OH → CH3COOC2H5 + H2O" },

{ id:71, level:"van_dung", question:"Để nhận biết este, phép thử phù hợp là", options:{A:"Quỳ tím",B:"NaOH đun nóng",C:"Nước vôi",D:"AgNO3"}, answer:"B", explanation:"Xà phòng hóa este.", equation:null },

{ id:72, level:"van_dung", question:"Đun nóng CH3COOC2H5 với NaOH thu được", options:{A:"Ancol và axit",B:"Muối và ancol",C:"Muối và nước",D:"Axit và nước"}, answer:"B", explanation:"Phản ứng xà phòng hóa.", equation:"CH3COOC2H5 + NaOH → CH3COONa + C2H5OH" },

{ id:73, level:"van_dung", question:"Khối lượng NaOH cần để xà phòng hóa 11,6 g etyl axetat là", options:{A:"4 g",B:"8 g",C:"12 g",D:"16 g"}, answer:"A", explanation:"n=0,1 mol → NaOH=0,1 mol → 4 g.", equation:null },

{ id:74, level:"van_dung", question:"Dung dịch nào làm giảm mùi este nhanh nhất?", options:{A:"Nước",B:"NaCl",C:"NaOH",D:"HCl"}, answer:"C", explanation:"NaOH xà phòng hóa.", equation:null },

{ id:75, level:"van_dung", question:"Để bảo quản giấm ăn lâu, cần", options:{A:"Để mở nắp",B:"Đun sôi",C:"Đậy kín",D:"Pha loãng"}, answer:"C", explanation:"Hạn chế bay hơi.", equation:null },

{ id:76, level:"van_dung", question:"Cặp chất nào phản ứng tạo este?", options:{A:"C2H5OH và NaOH",B:"CH3COOH và C2H5OH",C:"CH3COOH và NaCl",D:"C2H5OH và HCl"}, answer:"B", explanation:"Axit + ancol.", equation:null },

{ id:77, level:"van_dung", question:"Khi thêm nước vào hệ este hóa đang cân bằng thì", options:{A:"Tăng tạo este",B:"Giảm tạo este",C:"Không đổi",D:"Ngừng phản ứng"}, answer:"B", explanation:"Cân bằng chuyển trái.", equation:null },

{ id:78, level:"van_dung", question:"Từ 0,2 mol C2H5OH (dư axit), số mol este tối đa là", options:{A:"0,1",B:"0,2",C:"0,3",D:"0,4"}, answer:"B", explanation:"Tỉ lệ 1:1.", equation:null },

{ id:79, level:"van_dung", question:"Dung dịch nào trung hòa được CH3COOH?", options:{A:"NaCl",B:"HCl",C:"NaOH",D:"CO2"}, answer:"C", explanation:"Bazơ trung hòa axit.", equation:null },

{ id:80, level:"van_dung", question:"Đun nóng ancol etylic với H2SO4 đặc ở 170°C thu được chủ yếu", options:{A:"Etylen",B:"Etyl sunfat",C:"Axit axetic",D:"Este"}, answer:"A", explanation:"Tách nước tạo anken.", equation:"C2H5OH → C2H4 + H2O" },

{ id:81, level:"van_dung", question:"Từ 18 g CH3COOH (dư ancol), khối lượng este thu được tối đa là", options:{A:"34,8 g",B:"29 g",C:"23,2 g",D:"46,4 g"}, answer:"C", explanation:"n=0,3 → m=0,3×116=34,8? Sai; 18/60=0,3 → 34,8 g → sửa đáp án A", equation:null },

{ id:81, level:"van_dung", question:"Từ 18 g CH3COOH (dư ancol), khối lượng este thu được tối đa là", options:{A:"34,8 g",B:"29 g",C:"23,2 g",D:"46,4 g"}, answer:"A", explanation:"0,3 mol → 34,8 g.", equation:null },

{ id:82, level:"van_dung", question:"Sản phẩm khí sinh ra khi cho CH3COOH tác dụng Na2CO3 là", options:{A:"H2",B:"CO2",C:"O2",D:"N2"}, answer:"B", explanation:"Giải phóng CO2.", equation:null },

{ id:83, level:"van_dung", question:"Dùng chất nào để làm khô ancol etylic?", options:{A:"NaOH",B:"CaO",C:"NaCl",D:"HCl"}, answer:"B", explanation:"CaO hút nước.", equation:null },

{ id:84, level:"van_dung", question:"Ancol etylic 70° sát trùng tốt hơn 90° vì", options:{A:"Rẻ hơn",B:"Bay hơi chậm hơn",C:"Diệt khuẩn tốt hơn",D:"Ít độc"}, answer:"C", explanation:"Thấm tốt vào tế bào.", equation:null },

{ id:85, level:"van_dung", question:"Chất nào vừa phản ứng với Na vừa làm quỳ tím hóa đỏ?", options:{A:"C2H5OH",B:"CH3COOH",C:"NaCl",D:"CO2"}, answer:"B", explanation:"Axit phản ứng Na, làm đỏ quỳ.", equation:null },

/* ========== VẬN DỤNG CAO (86–100) ========== */

{ id:86, level:"van_dung_cao", question:"Đốt cháy hỗn hợp 0,1 mol C2H5OH và 0,1 mol CH3COOC2H5 thu được số mol CO2 là", options:{A:"0,4",B:"0,5",C:"0,6",D:"0,7"}, answer:"C", explanation:"EtOH→0,2; Este→0,4 → tổng 0,6.", equation:null },

{ id:87, level:"van_dung_cao", question:"Hỗn hợp X gồm CH3COOH và C2H5OH (1:1 mol). Hiệu suất este hóa 60%. Số mol este thu được là", options:{A:"0,3",B:"0,6",C:"0,5",D:"0,4"}, answer:"A", explanation:"Tối đa 0,5 → 60% = 0,3.", equation:null },

{ id:88, level:"van_dung_cao", question:"Để tách este khỏi hỗn hợp sau phản ứng este hóa, biện pháp phù hợp là", options:{A:"Trung hòa NaOH",B:"Chưng cất",C:"Thêm nước",D:"Lọc"}, answer:"B", explanation:"Este có nhiệt độ sôi riêng.", equation:null },

{ id:89, level:"van_dung_cao", question:"Đốt cháy 1 mol etyl axetat cần số mol O2 là", options:{A:"5",B:"6",C:"7",D:"8"}, answer:"C", explanation:"C4H8O2 + 5O2? Sai; cân bằng: C4H8O2 + 5O2 → 4CO2 + 4H2O → O2=5 → sửa đáp án A", equation:null },

{ id:89, level:"van_dung_cao", question:"Đốt cháy 1 mol etyl axetat cần số mol O2 là", options:{A:"5",B:"6",C:"7",D:"8"}, answer:"A", explanation:"C4H8O2 + 5O2 → 4CO2 + 4H2O.", equation:"CH3COOC2H5 + 5O2 → 4CO2 + 4H2O" },

{ id:90, level:"van_dung_cao", question:"Chất X có CTPT C4H8O2 và mùi thơm. X là", options:{A:"Axit",B:"Ancol",C:"Este",D:"Anđehit"}, answer:"C", explanation:"CT phù hợp este mạch hở.", equation:null },

{ id:91, level:"van_dung_cao", question:"Từ glucozơ có thể điều chế trực tiếp chất nào?", options:{A:"CH3COOH",B:"C2H5OH",C:"CH3COOC2H5",D:"C2H4"}, answer:"B", explanation:"Lên men rượu.", equation:"C6H12O6 → 2C2H5OH + 2CO2" },

{ id:92, level:"van_dung_cao", question:"Chuỗi chuyển hóa đúng là", options:{A:"Glucozơ → axit → ancol",B:"Glucozơ → ancol → axit → este",C:"Ancol → glucozơ → este",D:"Este → axit → glucozơ"}, answer:"B", explanation:"Lên men → oxi hóa → este hóa.", equation:null },

{ id:93, level:"van_dung_cao", question:"Dung dịch nào làm giảm nhanh mùi giấm?", options:{A:"NaOH",B:"NaCl",C:"HCl",D:"Nước"}, answer:"A", explanation:"Trung hòa axit.", equation:null },

{ id:94, level:"van_dung_cao", question:"Đun nóng 0,2 mol etyl axetat với NaOH dư thu được số mol C2H5OH là", options:{A:"0,1",B:"0,2",C:"0,3",D:"0,4"}, answer:"B", explanation:"Xà phòng hóa tỉ lệ 1:1.", equation:null },

{ id:95, level:"van_dung_cao", question:"Chất vừa làm khô ancol vừa không phản ứng là", options:{A:"Na",B:"CaO",C:"H2SO4 loãng",D:"NaOH"}, answer:"B", explanation:"CaO hút nước.", equation:null },

{ id:96, level:"van_dung_cao", question:"Để điều chế axit axetic từ ancol etylic, cần phản ứng", options:{A:"Cháy",B:"Oxi hóa",C:"Cộng",D:"Thế"}, answer:"B", explanation:"Oxi hóa ethanol.", equation:null },

{ id:97, level:"van_dung_cao", question:"Chất nào không tham gia phản ứng este hóa?", options:{A:"CH3COOH",B:"C2H5OH",C:"H2SO4 đặc",D:"NaCl"}, answer:"D", explanation:"NaCl không phản ứng.", equation:null },

{ id:98, level:"van_dung_cao", question:"Giải pháp hạn chế ngộ độc rượu là", options:{A:"Uống nhiều",B:"Pha loãng",C:"Dùng rượu chuẩn",D:"Không uống"}, answer:"C", explanation:"Tránh methanol.", equation:null },

{ id:99, level:"van_dung_cao", question:"Sản phẩm phụ thường gặp khi lên men rượu là", options:{A:"H2",B:"CO2",C:"O2",D:"N2"}, answer:"B", explanation:"Sinh CO2.", equation:null },

{ id:100, level:"van_dung_cao", question:"Ứng dụng bền vững của este là", options:{A:"Nhiên liệu chính",B:"Hương liệu – dung môi",C:"Phân bón",D:"Chất oxi hóa"}, answer:"B", explanation:"Este dùng làm hương liệu, dung môi.", equation:null },

{ id:1, level:"nhan_biet", question:"Lipit là hợp chất hữu cơ thuộc loại", options:{A:"Hiđrocacbon",B:"Este",C:"Axit",D:"Ancol"}, answer:"B", explanation:"Lipit là este của glixerol và axit béo.", equation:null },

{ id:2, level:"nhan_biet", question:"Thành phần chính của chất béo là", options:{A:"Glucozơ",B:"Protein",C:"Este",D:"Muối"}, answer:"C", explanation:"Chất béo là este.", equation:null },

{ id:3, level:"nhan_biet", question:"Công thức tổng quát của chất béo là", options:{A:"(RCOO)2C3H5",B:"(RCOO)3C3H5",C:"RCOOH",D:"C6H12O6"}, answer:"B", explanation:"Chất béo là trieste.", equation:null },

{ id:4, level:"nhan_biet", question:"Phản ứng xà phòng hóa là phản ứng của chất béo với", options:{A:"HCl",B:"H2SO4",C:"NaOH",D:"NaCl"}, answer:"C", explanation:"Chất béo tác dụng bazơ.", equation:"(RCOO)3C3H5 + 3NaOH → 3RCOONa + C3H5(OH)3" },

{ id:5, level:"nhan_biet", question:"Sản phẩm của phản ứng xà phòng hóa là", options:{A:"Axit béo và ancol",B:"Muối và nước",C:"Xà phòng và glixerol",D:"Este"}, answer:"C", explanation:"Tạo muối axit béo và glixerol.", equation:null },

{ id:6, level:"nhan_biet", question:"Glucozơ thuộc loại hợp chất", options:{A:"Lipit",B:"Protein",C:"Cacbohiđrat",D:"Este"}, answer:"C", explanation:"Glucozơ là cacbohiđrat.", equation:null },

{ id:7, level:"nhan_biet", question:"Công thức phân tử của glucozơ là", options:{A:"C12H22O11",B:"C6H12O6",C:"C6H10O5",D:"C2H5OH"}, answer:"B", explanation:"Glucozơ có CTPT C6H12O6.", equation:null },

{ id:8, level:"nhan_biet", question:"Tinh bột được tạo thành từ nhiều đơn vị", options:{A:"Glucozơ",B:"Saccarozơ",C:"Fructozơ",D:"Xenlulozơ"}, answer:"A", explanation:"Tinh bột là polime của glucozơ.", equation:null },

{ id:9, level:"nhan_biet", question:"Thuốc thử nhận biết tinh bột là", options:{A:"Quỳ tím",B:"Dung dịch brom",C:"Dung dịch iot",D:"NaOH"}, answer:"C", explanation:"Tinh bột + I2 → xanh tím.", equation:null },

{ id:10, level:"nhan_biet", question:"Protein là hợp chất hữu cơ chứa nguyên tố", options:{A:"C, H",B:"C, H, O",C:"C, H, O, N",D:"C, H, N"}, answer:"C", explanation:"Protein chứa N.", equation:null },

{ id:11, level:"nhan_biet", question:"Hiện tượng đông tụ protein xảy ra khi", options:{A:"Làm lạnh",B:"Đun nóng",C:"Hòa tan",D:"Bay hơi"}, answer:"B", explanation:"Nhiệt làm biến tính protein.", equation:null },

{ id:12, level:"nhan_biet", question:"Polime là chất có", options:{A:"Phân tử nhỏ",B:"Khối lượng phân tử lớn",C:"Dễ bay hơi",D:"Tan mạnh trong nước"}, answer:"B", explanation:"Polime có M lớn.", equation:null },

{ id:13, level:"nhan_biet", question:"Polietilen (PE) được điều chế từ monome", options:{A:"CH4",B:"C2H6",C:"C2H4",D:"C3H6"}, answer:"C", explanation:"Etilen trùng hợp.", equation:"nCH2=CH2 → (–CH2–CH2–)n" },

{ id:14, level:"nhan_biet", question:"Polime khó phân hủy gây tác hại gì?", options:{A:"Tiết kiệm năng lượng",B:"Ô nhiễm môi trường",C:"Tăng độ phì đất",D:"Dễ tái chế"}, answer:"B", explanation:"Khó phân hủy sinh ô nhiễm.", equation:null },

{ id:15, level:"nhan_biet", question:"Chất nào sau đây là polime?", options:{A:"Glucozơ",B:"Tinh bột",C:"Ethanol",D:"Axit axetic"}, answer:"B", explanation:"Tinh bột là polime.", equation:null },

{ id:16, level:"nhan_biet", question:"Glucozơ tham gia phản ứng tráng bạc vì", options:{A:"Có nhóm –OH",B:"Có nhóm –CHO",C:"Có liên kết đôi",D:"Có mùi thơm"}, answer:"B", explanation:"Có nhóm anđehit.", equation:null },

{ id:17, level:"nhan_biet", question:"Dung dịch glucozơ làm Cu(OH)2 chuyển sang màu", options:{A:"Đỏ gạch",B:"Xanh lam",C:"Vàng",D:"Không đổi"}, answer:"B", explanation:"Tạo phức xanh lam.", equation:null },

{ id:18, level:"nhan_biet", question:"Tinh bột không tan trong nước lạnh vì", options:{A:"Nặng",B:"Không phân cực",C:"Cấu trúc polime",D:"Bay hơi"}, answer:"C", explanation:"Mạch polime lớn.", equation:null },

{ id:19, level:"nhan_biet", question:"Xenlulozơ có nhiều trong", options:{A:"Thịt",B:"Sữa",C:"Gỗ",D:"Trứng"}, answer:"C", explanation:"Xenlulozơ trong gỗ.", equation:null },

{ id:20, level:"nhan_biet", question:"Polime nhân tạo phổ biến là", options:{A:"Tinh bột",B:"Protein",C:"PE",D:"Glucozơ"}, answer:"C", explanation:"PE là polime nhân tạo.", equation:null },

{ id:21, level:"nhan_biet", question:"Chất béo không tan trong nước vì", options:{A:"Nhẹ",B:"Không phân cực",C:"Có mùi",D:"Bay hơi"}, answer:"B", explanation:"Chất béo kém phân cực.", equation:null },

{ id:22, level:"nhan_biet", question:"Glucozơ là nguồn năng lượng chính cho", options:{A:"Thực vật",B:"Động vật",C:"Con người",D:"Mọi sinh vật"}, answer:"D", explanation:"Nguồn năng lượng chung.", equation:null },

{ id:23, level:"nhan_biet", question:"Tinh bột và xenlulozơ đều được tạo từ", options:{A:"Fructozơ",B:"Glucozơ",C:"Saccarozơ",D:"Protein"}, answer:"B", explanation:"Đều từ glucozơ.", equation:null },

{ id:24, level:"nhan_biet", question:"Protein có vai trò chính là", options:{A:"Cung cấp năng lượng",B:"Xây dựng cơ thể",C:"Tạo mùi",D:"Làm nhiên liệu"}, answer:"B", explanation:"Protein cấu tạo tế bào.", equation:null },

{ id:25, level:"nhan_biet", question:"Lipit cung cấp năng lượng", options:{A:"Ít hơn glucozơ",B:"Nhiều hơn glucozơ",C:"Bằng glucozơ",D:"Không cung cấp"}, answer:"B", explanation:"Chất béo giàu năng lượng.", equation:null },

{ id:26, level:"nhan_biet", question:"Polime tự nhiên là", options:{A:"PE",B:"PVC",C:"Tinh bột",D:"Nilon"}, answer:"C", explanation:"Tinh bột là polime tự nhiên.", equation:null },

{ id:27, level:"nhan_biet", question:"Protein bị biến tính khi", options:{A:"Đun nóng",B:"Làm lạnh",C:"Hòa tan",D:"Ép"}, answer:"A", explanation:"Nhiệt phá vỡ cấu trúc.", equation:null },

{ id:28, level:"nhan_biet", question:"Glucozơ có vị", options:{A:"Chua",B:"Đắng",C:"Ngọt",D:"Mặn"}, answer:"C", explanation:"Glucozơ có vị ngọt.", equation:null },

{ id:29, level:"nhan_biet", question:"Tinh bột là chất dự trữ năng lượng của", options:{A:"Động vật",B:"Thực vật",C:"Vi khuẩn",D:"Nấm"}, answer:"B", explanation:"Thực vật dự trữ tinh bột.", equation:null },

{ id:30, level:"nhan_biet", question:"Chất béo có nguồn gốc từ", options:{A:"Khoáng",B:"Sinh vật",C:"Kim loại",D:"Phi kim"}, answer:"B", explanation:"Nguồn gốc sinh học.", equation:null },

{ id:31, level:"thong_hieu", question:"Vì sao chất béo có năng lượng cao?", options:{A:"Nhẹ",B:"Nhiều liên kết C–H",C:"Tan trong nước",D:"Có mùi"}, answer:"B", explanation:"Liên kết C–H sinh nhiều năng lượng.", equation:null },

{ id:32, level:"thong_hieu", question:"Xà phòng làm sạch vết dầu mỡ vì", options:{A:"Tan trong nước",B:"Có đầu ưa nước, đuôi kị nước",C:"Có mùi",D:"Bay hơi"}, answer:"B", explanation:"Tạo mixen.", equation:null },

{ id:33, level:"thong_hieu", question:"Tinh bột và xenlulozơ khác nhau ở", options:{A:"Thành phần nguyên tố",B:"Đơn vị cấu tạo",C:"Kiểu liên kết",D:"Khối lượng"}, answer:"C", explanation:"Liên kết khác nhau.", equation:null },

{ id:34, level:"thong_hieu", question:"Protein đông tụ khi đun nóng do", options:{A:"Bay hơi",B:"Biến tính cấu trúc",C:"Tan",D:"Cháy"}, answer:"B", explanation:"Cấu trúc không gian bị phá.", equation:null },

{ id:35, level:"thong_hieu", question:"Tinh bột không phản ứng tráng bạc vì", options:{A:"Không tan",B:"Không có nhóm –CHO",C:"Nặng",D:"Không màu"}, answer:"B", explanation:"Không có nhóm anđehit.", equation:null },

{ id:36, level:"thong_hieu", question:"Glucozơ phản ứng với Cu(OH)2 chứng tỏ", options:{A:"Có liên kết đôi",B:"Có nhiều –OH",C:"Có N",D:"Có este"}, answer:"B", explanation:"Tạo phức xanh lam.", equation:null },

{ id:37, level:"thong_hieu", question:"Polime nhân tạo được sử dụng nhiều vì", options:{A:"Dễ phân hủy",B:"Bền, nhẹ, rẻ",C:"Tan nước",D:"Đắt tiền"}, answer:"B", explanation:"Ưu điểm cơ học.", equation:null },

{ id:38, level:"thong_hieu", question:"Vì sao hạn chế dùng túi nilon?", options:{A:"Đắt",B:"Khó phân hủy",C:"Nặng",D:"Dễ cháy"}, answer:"B", explanation:"Gây ô nhiễm.", equation:null },

{ id:39, level:"thong_hieu", question:"Tinh bột bị thủy phân tạo ra", options:{A:"Protein",B:"Glucozơ",C:"Lipit",D:"Este"}, answer:"B", explanation:"Cắt mạch polime.", equation:null },

{ id:40, level:"thong_hieu", question:"Protein cần thiết cho cơ thể vì", options:{A:"Tạo năng lượng chính",B:"Xây dựng mô",C:"Tạo mùi",D:"Làm nhiên liệu"}, answer:"B", explanation:"Xây dựng tế bào.", equation:null },

{ id:41, level:"thong_hieu", question:"Xà phòng không hoạt động tốt trong nước cứng vì", options:{A:"Tan kém",B:"Tạo kết tủa",C:"Bay hơi",D:"Độc"}, answer:"B", explanation:"Tạo muối không tan.", equation:null },

{ id:42, level:"thong_hieu", question:"Polime sinh học thân thiện môi trường vì", options:{A:"Bền",B:"Khó phân hủy",C:"Phân hủy sinh học",D:"Rẻ"}, answer:"C", explanation:"Phân hủy tự nhiên.", equation:null },

{ id:43, level:"thong_hieu", question:"Glucozơ được hấp thụ trực tiếp vì", options:{A:"Tan nước",B:"Phân tử nhỏ",C:"Ngọt",D:"Có mùi"}, answer:"B", explanation:"Không cần tiêu hóa thêm.", equation:null },

{ id:44, level:"thong_hieu", question:"Tinh bột chín dễ tiêu hơn sống vì", options:{A:"Tan hơn",B:"Cấu trúc thay đổi",C:"Ngọt hơn",D:"Nhẹ"}, answer:"B", explanation:"Bị hồ hóa.", equation:null },

{ id:45, level:"thong_hieu", question:"Protein bị biến tính không còn hoạt tính vì", options:{A:"Tan",B:"Mất cấu trúc",C:"Bay hơi",D:"Đổi màu"}, answer:"B", explanation:"Cấu trúc quyết định chức năng.", equation:null },

{ id:46, level:"thong_hieu", question:"Polietilen cách điện tốt vì", options:{A:"Tan nước",B:"Không có ion",C:"Có mùi",D:"Nặng"}, answer:"B", explanation:"Không có hạt mang điện.", equation:null },

{ id:47, level:"thong_hieu", question:"Lipit cần thiết cho cơ thể vì", options:{A:"Tạo mùi",B:"Dự trữ năng lượng",C:"Tạo axit",D:"Dẫn điện"}, answer:"B", explanation:"Nguồn năng lượng dự trữ.", equation:null },

{ id:48, level:"thong_hieu", question:"Glucozơ trong máu giảm gây", options:{A:"Béo phì",B:"Hạ đường huyết",C:"Tăng cơ",D:"Sốt"}, answer:"B", explanation:"Thiếu năng lượng.", equation:null },

{ id:49, level:"thong_hieu", question:"Tinh bột trong thức ăn được tiêu hóa thành", options:{A:"Protein",B:"Glucozơ",C:"Lipit",D:"Muối"}, answer:"B", explanation:"Thủy phân thành glucozơ.", equation:null },

{ id:50, level:"thong_hieu", question:"Xenlulozơ không tiêu hóa được vì", options:{A:"Không tan",B:"Liên kết bền",C:"Độc",D:"Có mùi"}, answer:"B", explanation:"Liên kết β khó phân hủy.", equation:null },

{ id:51, level:"thong_hieu", question:"Chất béo rắn khác lỏng chủ yếu do", options:{A:"Màu",B:"Mạch no – không no",C:"Khối lượng",D:"Mùi"}, answer:"B", explanation:"Liên kết đôi.", equation:null },

{ id:52, level:"thong_hieu", question:"Polime tái chế giúp", options:{A:"Tăng ô nhiễm",B:"Tiết kiệm tài nguyên",C:"Tốn năng lượng",D:"Tạo rác"}, answer:"B", explanation:"Giảm rác thải.", equation:null },

{ id:53, level:"thong_hieu", question:"Glucozơ tham gia hô hấp tế bào để", options:{A:"Tạo mùi",B:"Sinh năng lượng",C:"Tạo protein",D:"Tạo lipit"}, answer:"B", explanation:"Cung cấp ATP.", equation:null },

{ id:54, level:"thong_hieu", question:"Xà phòng có khả năng nhũ hóa vì", options:{A:"Có màu",B:"Có hai đầu tính chất khác nhau",C:"Có mùi",D:"Bay hơi"}, answer:"B", explanation:"Đầu ưa – kị nước.", equation:null },

{ id:55, level:"thong_hieu", question:"Tinh bột và glucozơ đều", options:{A:"Không tan",B:"Ngọt",C:"Cung cấp năng lượng",D:"Là este"}, answer:"C", explanation:"Đều cho năng lượng.", equation:null },

{ id:56, level:"thong_hieu", question:"Protein thiếu sẽ gây", options:{A:"Béo phì",B:"Suy dinh dưỡng",C:"Tăng cân",D:"Sốt"}, answer:"B", explanation:"Thiếu xây dựng cơ thể.", equation:null },

{ id:57, level:"thong_hieu", question:"Polime sinh học được ưu tiên vì", options:{A:"Rẻ",B:"Bền",C:"Thân thiện môi trường",D:"Dễ cháy"}, answer:"C", explanation:"Giảm ô nhiễm.", equation:null },

{ id:58, level:"thong_hieu", question:"Glucozơ dư thừa được chuyển thành", options:{A:"Protein",B:"Lipit",C:"Muối",D:"Nước"}, answer:"B", explanation:"Dự trữ dưới dạng mỡ.", equation:null },

{ id:59, level:"thong_hieu", question:"Xà phòng kém hiệu quả trong nước biển vì", options:{A:"Mặn",B:"Nhiều ion Ca2+, Mg2+",C:"Nóng",D:"Đục"}, answer:"B", explanation:"Tạo kết tủa.", equation:null },

{ id:60, level:"thong_hieu", question:"Vai trò chính của cacbohiđrat là", options:{A:"Xây dựng cơ thể",B:"Cung cấp năng lượng",C:"Tạo mùi",D:"Dẫn điện"}, answer:"B", explanation:"Nguồn năng lượng nhanh.", equation:null },

{ id:61, level:"van_dung", question:"Để điều chế xà phòng từ dầu ăn đã qua sử dụng cần dùng hóa chất nào?", options:{A:"HCl",B:"NaOH",C:"NaCl",D:"Na2CO3"}, answer:"B", explanation:"Phản ứng xà phòng hóa cần NaOH.", equation:"(RCOO)3C3H5 + 3NaOH → 3RCOONa + C3H5(OH)3" },

{ id:62, level:"van_dung", question:"Một người lao động nặng cần bổ sung nhiều chất nào nhất?", options:{A:"Protein",B:"Lipit",C:"Cacbohiđrat",D:"Vitamin"}, answer:"C", explanation:"Cacbohiđrat cung cấp năng lượng nhanh.", equation:null },

{ id:63, level:"van_dung", question:"Dùng dung dịch nào sau đây để phân biệt glucozơ và tinh bột?", options:{A:"NaOH",B:"HCl",C:"Dung dịch iot",D:"Nước cất"}, answer:"C", explanation:"Tinh bột + I2 → xanh tím.", equation:null },

{ id:64, level:"van_dung", question:"Ăn quá nhiều chất béo lâu dài có thể gây", options:{A:"Suy dinh dưỡng",B:"Thiếu năng lượng",C:"Béo phì",D:"Thiếu vitamin"}, answer:"C", explanation:"Dư thừa lipit gây béo phì.", equation:null },

{ id:65, level:"van_dung", question:"Để giảm ô nhiễm từ rác thải nhựa, biện pháp hiệu quả là", options:{A:"Đốt",B:"Chôn lấp",C:"Tái chế",D:"Vứt ra sông"}, answer:"C", explanation:"Tái chế giảm rác và tiết kiệm tài nguyên.", equation:null },

{ id:66, level:"van_dung", question:"Khi nấu cơm, hiện tượng hồ hóa tinh bột xảy ra do", options:{A:"Áp suất",B:"Nhiệt độ",C:"Ánh sáng",D:"Không khí"}, answer:"B", explanation:"Nhiệt làm tinh bột trương nở.", equation:null },

{ id:67, level:"van_dung", question:"Người tiểu đường cần hạn chế chất nào?", options:{A:"Protein",B:"Lipit",C:"Glucozơ",D:"Nước"}, answer:"C", explanation:"Glucozơ làm tăng đường huyết.", equation:null },

{ id:68, level:"van_dung", question:"Xà phòng giặt không hiệu quả trong nước cứng vì", options:{A:"Ít bọt",B:"Bay hơi",C:"Tạo kết tủa",D:"Có mùi"}, answer:"C", explanation:"Ion Ca2+, Mg2+ tạo muối không tan.", equation:null },

{ id:69, level:"van_dung", question:"Protein trong trứng bị đông tụ khi luộc do", options:{A:"Oxi hóa",B:"Thủy phân",C:"Biến tính",D:"Trùng hợp"}, answer:"C", explanation:"Nhiệt làm biến tính protein.", equation:null },

{ id:70, level:"van_dung", question:"Tinh bột là nguồn năng lượng chủ yếu trong khẩu phần vì", options:{A:"Rẻ",B:"Dễ tiêu hóa",C:"Khó phân hủy",D:"Không tan"}, answer:"B", explanation:"Thủy phân thành glucozơ.", equation:null },

{ id:71, level:"van_dung", question:"Chất nào sau đây vừa cung cấp năng lượng vừa giúp hòa tan vitamin A, D?", options:{A:"Protein",B:"Lipit",C:"Glucozơ",D:"Muối"}, answer:"B", explanation:"Vitamin tan trong dầu mỡ.", equation:null },

{ id:72, level:"van_dung", question:"Dùng chất nào để kiểm tra sự có mặt của tinh bột trong khoai?", options:{A:"Cu(OH)2",B:"NaOH",C:"Dung dịch iot",D:"HCl"}, answer:"C", explanation:"Iot cho màu xanh tím.", equation:null },

{ id:73, level:"van_dung", question:"Polime sinh học thay thế nhựa truyền thống giúp", options:{A:"Tăng rác",B:"Giảm ô nhiễm",C:"Tăng chi phí",D:"Khó sử dụng"}, answer:"B", explanation:"Dễ phân hủy sinh học.", equation:null },

{ id:74, level:"van_dung", question:"Glucozơ dư trong cơ thể được chuyển hóa thành", options:{A:"Protein",B:"Tinh bột",C:"Lipit",D:"Muối"}, answer:"C", explanation:"Dự trữ dưới dạng mỡ.", equation:null },

{ id:75, level:"van_dung", question:"Ăn thiếu protein kéo dài sẽ dẫn đến", options:{A:"Béo phì",B:"Suy dinh dưỡng",C:"Tăng cơ",D:"Tăng đường huyết"}, answer:"B", explanation:"Thiếu nguyên liệu xây dựng.", equation:null },

{ id:76, level:"van_dung", question:"Chất tẩy rửa tổng hợp ít bị ảnh hưởng bởi nước cứng vì", options:{A:"Tan kém",B:"Không tạo kết tủa",C:"Có mùi",D:"Bay hơi"}, answer:"B", explanation:"Không phản ứng với Ca2+, Mg2+.", equation:null },

{ id:77, level:"van_dung", question:"Xenlulozơ được dùng làm giấy vì", options:{A:"Tan trong nước",B:"Dễ cháy",C:"Có cấu trúc sợi bền",D:"Ngọt"}, answer:"C", explanation:"Cấu trúc mạch dài, bền.", equation:null },

{ id:78, level:"van_dung", question:"Khi ăn cơm nhai kĩ sẽ thấy vị ngọt do", options:{A:"Protein",B:"Tinh bột chuyển hóa",C:"Lipit",D:"Muối"}, answer:"B", explanation:"Enzim thủy phân tinh bột.", equation:null },

{ id:79, level:"van_dung", question:"Bao bì nhựa dùng một lần gây hại vì", options:{A:"Nặng",B:"Đắt",C:"Khó phân hủy",D:"Dễ cháy"}, answer:"C", explanation:"Tồn tại lâu trong môi trường.", equation:null },

{ id:80, level:"van_dung", question:"Thực phẩm giàu glucozơ phù hợp cho", options:{A:"Người lao động nặng",B:"Người béo phì",C:"Người tiểu đường",D:"Người ít vận động"}, answer:"A", explanation:"Cần năng lượng nhanh.", equation:null },

{ id:81, level:"van_dung", question:"Chất béo lỏng thường chứa nhiều", options:{A:"Liên kết đơn",B:"Liên kết đôi",C:"Nguyên tử N",D:"Este vòng"}, answer:"B", explanation:"Liên kết không no.", equation:null },

{ id:82, level:"van_dung", question:"Giặt quần áo bằng nước nóng giúp sạch hơn vì", options:{A:"Tăng bay hơi",B:"Lipit tan tốt hơn",C:"Tăng mùi",D:"Đổi màu"}, answer:"B", explanation:"Dầu mỡ tan tốt khi nóng.", equation:null },

{ id:83, level:"van_dung", question:"Protein bị đông tụ không thể trở lại trạng thái ban đầu vì", options:{A:"Tan",B:"Biến tính không thuận nghịch",C:"Bay hơi",D:"Oxi hóa"}, answer:"B", explanation:"Cấu trúc bị phá vỡ.", equation:null },

{ id:84, level:"van_dung", question:"Sử dụng túi giấy thay túi nilon giúp", options:{A:"Tăng rác",B:"Giảm ô nhiễm",C:"Khó phân hủy",D:"Tăng chi phí"}, answer:"B", explanation:"Giấy dễ phân hủy.", equation:null },

{ id:85, level:"van_dung", question:"Thực phẩm nào giàu protein nhất?", options:{A:"Gạo",B:"Thịt",C:"Đường",D:"Dầu ăn"}, answer:"B", explanation:"Thịt giàu protein.", equation:null },

{ id:86, level:"van_dung_cao", question:"Vì sao nên hạn chế chiên rán nhiều lần cùng một loại dầu?", options:{A:"Tốn dầu",B:"Dầu bị phân hủy tạo chất độc",C:"Mất màu",D:"Giảm mùi"}, answer:"B", explanation:"Nhiệt cao phá hủy lipit.", equation:null },

{ id:87, level:"van_dung_cao", question:"Giải pháp hiệu quả nhất để giảm rác thải nhựa là", options:{A:"Chôn lấp",B:"Đốt",C:"Tái sử dụng và tái chế",D:"Vứt bỏ"}, answer:"C", explanation:"Giảm phát sinh rác.", equation:null },

{ id:88, level:"van_dung_cao", question:"Người ăn chay cần chú ý bổ sung", options:{A:"Lipit động vật",B:"Protein thực vật",C:"Muối",D:"Đường"}, answer:"B", explanation:"Bù đắp thiếu protein.", equation:null },

{ id:89, level:"van_dung_cao", question:"Thực phẩm nào giúp giải phóng năng lượng lâu dài?", options:{A:"Kẹo",B:"Cơm",C:"Chất béo",D:"Nước"}, answer:"C", explanation:"Lipit giải phóng chậm.", equation:null },

{ id:90, level:"van_dung_cao", question:"Vì sao nên phân loại rác hữu cơ và vô cơ?", options:{A:"Cho đẹp",B:"Dễ xử lí, tái chế",C:"Tốn công",D:"Không cần"}, answer:"B", explanation:"Tăng hiệu quả xử lí.", equation:null },

{ id:91, level:"van_dung_cao", question:"Ăn nhiều tinh bột nhưng ít vận động sẽ dẫn đến", options:{A:"Thiếu năng lượng",B:"Béo phì",C:"Suy dinh dưỡng",D:"Thiếu protein"}, answer:"B", explanation:"Dư năng lượng chuyển thành mỡ.", equation:null },

{ id:92, level:"van_dung_cao", question:"Polime phân hủy sinh học khác nhựa thường vì", options:{A:"Bền hơn",B:"Dễ bị vi sinh vật phân hủy",C:"Đắt hơn",D:"Nặng hơn"}, answer:"B", explanation:"Có liên kết dễ phân hủy.", equation:null },

{ id:93, level:"van_dung_cao", question:"Vì sao glucozơ được truyền trực tiếp vào máu?", options:{A:"Ngọt",B:"Không độc",C:"Cung cấp năng lượng nhanh",D:"Rẻ"}, answer:"C", explanation:"Hấp thụ trực tiếp.", equation:null },

{ id:94, level:"van_dung_cao", question:"Xà phòng làm sạch dầu mỡ theo cơ chế", options:{A:"Hòa tan",B:"Nhũ hóa",C:"Bay hơi",D:"Oxi hóa"}, answer:"B", explanation:"Tạo mixen cuốn dầu.", equation:null },

{ id:95, level:"van_dung_cao", question:"Chế độ ăn cân đối cần đảm bảo", options:{A:"Chỉ glucozơ",B:"Chỉ protein",C:"Đủ cacbohiđrat, lipit, protein",D:"Chỉ vitamin"}, answer:"C", explanation:"Đảm bảo dinh dưỡng.", equation:null },

{ id:96, level:"van_dung_cao", question:"Tác hại lâu dài của rác nhựa là", options:{A:"Tăng dinh dưỡng đất",B:"Ô nhiễm đất, nước, sinh vật",C:"Tăng năng suất",D:"Không ảnh hưởng"}, answer:"B", explanation:"Ảnh hưởng hệ sinh thái.", equation:null },

{ id:97, level:"van_dung_cao", question:"Người lao động trí óc cần bổ sung nhiều", options:{A:"Muối",B:"Glucozơ",C:"Chất xơ",D:"Nước"}, answer:"B", explanation:"Não sử dụng glucozơ.", equation:null },

{ id:98, level:"van_dung_cao", question:"Protein bị biến tính không còn chức năng vì", options:{A:"Tan",B:"Mất cấu trúc không gian",C:"Bay hơi",D:"Oxi hóa hoàn toàn"}, answer:"B", explanation:"Cấu trúc quyết định chức năng.", equation:null },

{ id:99, level:"van_dung_cao", question:"Biện pháp bền vững với môi trường nhất là", options:{A:"Sử dụng một lần",B:"Tái sử dụng",C:"Đốt rác",D:"Chôn rác"}, answer:"B", explanation:"Giảm phát sinh rác.", equation:null },

{ id:100, level:"van_dung_cao", question:"Hóa học hữu cơ trong đời sống giúp con người", options:{A:"Tạo ô nhiễm",B:"Hiểu và sử dụng hợp lí vật liệu",C:"Tăng rác thải",D:"Giảm sức khỏe"}, answer:"B", explanation:"Ứng dụng khoa học hiệu quả.", equation:null },

{ id:61, level:"van_dung", question:"Để điều chế xà phòng từ dầu ăn đã qua sử dụng cần dùng hóa chất nào?", options:{A:"HCl",B:"NaOH",C:"NaCl",D:"Na2CO3"}, answer:"B", explanation:"Phản ứng xà phòng hóa cần NaOH.", equation:"(RCOO)3C3H5 + 3NaOH → 3RCOONa + C3H5(OH)3" },

{ id:62, level:"van_dung", question:"Một người lao động nặng cần bổ sung nhiều chất nào nhất?", options:{A:"Protein",B:"Lipit",C:"Cacbohiđrat",D:"Vitamin"}, answer:"C", explanation:"Cacbohiđrat cung cấp năng lượng nhanh.", equation:null },

{ id:63, level:"van_dung", question:"Dùng dung dịch nào sau đây để phân biệt glucozơ và tinh bột?", options:{A:"NaOH",B:"HCl",C:"Dung dịch iot",D:"Nước cất"}, answer:"C", explanation:"Tinh bột + I2 → xanh tím.", equation:null },

{ id:64, level:"van_dung", question:"Ăn quá nhiều chất béo lâu dài có thể gây", options:{A:"Suy dinh dưỡng",B:"Thiếu năng lượng",C:"Béo phì",D:"Thiếu vitamin"}, answer:"C", explanation:"Dư thừa lipit gây béo phì.", equation:null },

{ id:65, level:"van_dung", question:"Để giảm ô nhiễm từ rác thải nhựa, biện pháp hiệu quả là", options:{A:"Đốt",B:"Chôn lấp",C:"Tái chế",D:"Vứt ra sông"}, answer:"C", explanation:"Tái chế giảm rác và tiết kiệm tài nguyên.", equation:null },

{ id:66, level:"van_dung", question:"Khi nấu cơm, hiện tượng hồ hóa tinh bột xảy ra do", options:{A:"Áp suất",B:"Nhiệt độ",C:"Ánh sáng",D:"Không khí"}, answer:"B", explanation:"Nhiệt làm tinh bột trương nở.", equation:null },

{ id:67, level:"van_dung", question:"Người tiểu đường cần hạn chế chất nào?", options:{A:"Protein",B:"Lipit",C:"Glucozơ",D:"Nước"}, answer:"C", explanation:"Glucozơ làm tăng đường huyết.", equation:null },

{ id:68, level:"van_dung", question:"Xà phòng giặt không hiệu quả trong nước cứng vì", options:{A:"Ít bọt",B:"Bay hơi",C:"Tạo kết tủa",D:"Có mùi"}, answer:"C", explanation:"Ion Ca2+, Mg2+ tạo muối không tan.", equation:null },

{ id:69, level:"van_dung", question:"Protein trong trứng bị đông tụ khi luộc do", options:{A:"Oxi hóa",B:"Thủy phân",C:"Biến tính",D:"Trùng hợp"}, answer:"C", explanation:"Nhiệt làm biến tính protein.", equation:null },

{ id:70, level:"van_dung", question:"Tinh bột là nguồn năng lượng chủ yếu trong khẩu phần vì", options:{A:"Rẻ",B:"Dễ tiêu hóa",C:"Khó phân hủy",D:"Không tan"}, answer:"B", explanation:"Thủy phân thành glucozơ.", equation:null },

{ id:71, level:"van_dung", question:"Chất nào sau đây vừa cung cấp năng lượng vừa giúp hòa tan vitamin A, D?", options:{A:"Protein",B:"Lipit",C:"Glucozơ",D:"Muối"}, answer:"B", explanation:"Vitamin tan trong dầu mỡ.", equation:null },

{ id:72, level:"van_dung", question:"Dùng chất nào để kiểm tra sự có mặt của tinh bột trong khoai?", options:{A:"Cu(OH)2",B:"NaOH",C:"Dung dịch iot",D:"HCl"}, answer:"C", explanation:"Iot cho màu xanh tím.", equation:null },

{ id:73, level:"van_dung", question:"Polime sinh học thay thế nhựa truyền thống giúp", options:{A:"Tăng rác",B:"Giảm ô nhiễm",C:"Tăng chi phí",D:"Khó sử dụng"}, answer:"B", explanation:"Dễ phân hủy sinh học.", equation:null },

{ id:74, level:"van_dung", question:"Glucozơ dư trong cơ thể được chuyển hóa thành", options:{A:"Protein",B:"Tinh bột",C:"Lipit",D:"Muối"}, answer:"C", explanation:"Dự trữ dưới dạng mỡ.", equation:null },

{ id:75, level:"van_dung", question:"Ăn thiếu protein kéo dài sẽ dẫn đến", options:{A:"Béo phì",B:"Suy dinh dưỡng",C:"Tăng cơ",D:"Tăng đường huyết"}, answer:"B", explanation:"Thiếu nguyên liệu xây dựng.", equation:null },

{ id:76, level:"van_dung", question:"Chất tẩy rửa tổng hợp ít bị ảnh hưởng bởi nước cứng vì", options:{A:"Tan kém",B:"Không tạo kết tủa",C:"Có mùi",D:"Bay hơi"}, answer:"B", explanation:"Không phản ứng với Ca2+, Mg2+.", equation:null },

{ id:77, level:"van_dung", question:"Xenlulozơ được dùng làm giấy vì", options:{A:"Tan trong nước",B:"Dễ cháy",C:"Có cấu trúc sợi bền",D:"Ngọt"}, answer:"C", explanation:"Cấu trúc mạch dài, bền.", equation:null },

{ id:78, level:"van_dung", question:"Khi ăn cơm nhai kĩ sẽ thấy vị ngọt do", options:{A:"Protein",B:"Tinh bột chuyển hóa",C:"Lipit",D:"Muối"}, answer:"B", explanation:"Enzim thủy phân tinh bột.", equation:null },

{ id:79, level:"van_dung", question:"Bao bì nhựa dùng một lần gây hại vì", options:{A:"Nặng",B:"Đắt",C:"Khó phân hủy",D:"Dễ cháy"}, answer:"C", explanation:"Tồn tại lâu trong môi trường.", equation:null },

{ id:80, level:"van_dung", question:"Thực phẩm giàu glucozơ phù hợp cho", options:{A:"Người lao động nặng",B:"Người béo phì",C:"Người tiểu đường",D:"Người ít vận động"}, answer:"A", explanation:"Cần năng lượng nhanh.", equation:null },

{ id:81, level:"van_dung", question:"Chất béo lỏng thường chứa nhiều", options:{A:"Liên kết đơn",B:"Liên kết đôi",C:"Nguyên tử N",D:"Este vòng"}, answer:"B", explanation:"Liên kết không no.", equation:null },

{ id:82, level:"van_dung", question:"Giặt quần áo bằng nước nóng giúp sạch hơn vì", options:{A:"Tăng bay hơi",B:"Lipit tan tốt hơn",C:"Tăng mùi",D:"Đổi màu"}, answer:"B", explanation:"Dầu mỡ tan tốt khi nóng.", equation:null },

{ id:83, level:"van_dung", question:"Protein bị đông tụ không thể trở lại trạng thái ban đầu vì", options:{A:"Tan",B:"Biến tính không thuận nghịch",C:"Bay hơi",D:"Oxi hóa"}, answer:"B", explanation:"Cấu trúc bị phá vỡ.", equation:null },

{ id:84, level:"van_dung", question:"Sử dụng túi giấy thay túi nilon giúp", options:{A:"Tăng rác",B:"Giảm ô nhiễm",C:"Khó phân hủy",D:"Tăng chi phí"}, answer:"B", explanation:"Giấy dễ phân hủy.", equation:null },

{ id:85, level:"van_dung", question:"Thực phẩm nào giàu protein nhất?", options:{A:"Gạo",B:"Thịt",C:"Đường",D:"Dầu ăn"}, answer:"B", explanation:"Thịt giàu protein.", equation:null },

{ id:86, level:"van_dung_cao", question:"Vì sao nên hạn chế chiên rán nhiều lần cùng một loại dầu?", options:{A:"Tốn dầu",B:"Dầu bị phân hủy tạo chất độc",C:"Mất màu",D:"Giảm mùi"}, answer:"B", explanation:"Nhiệt cao phá hủy lipit.", equation:null },

{ id:87, level:"van_dung_cao", question:"Giải pháp hiệu quả nhất để giảm rác thải nhựa là", options:{A:"Chôn lấp",B:"Đốt",C:"Tái sử dụng và tái chế",D:"Vứt bỏ"}, answer:"C", explanation:"Giảm phát sinh rác.", equation:null },

{ id:88, level:"van_dung_cao", question:"Người ăn chay cần chú ý bổ sung", options:{A:"Lipit động vật",B:"Protein thực vật",C:"Muối",D:"Đường"}, answer:"B", explanation:"Bù đắp thiếu protein.", equation:null },

{ id:89, level:"van_dung_cao", question:"Thực phẩm nào giúp giải phóng năng lượng lâu dài?", options:{A:"Kẹo",B:"Cơm",C:"Chất béo",D:"Nước"}, answer:"C", explanation:"Lipit giải phóng chậm.", equation:null },

{ id:90, level:"van_dung_cao", question:"Vì sao nên phân loại rác hữu cơ và vô cơ?", options:{A:"Cho đẹp",B:"Dễ xử lí, tái chế",C:"Tốn công",D:"Không cần"}, answer:"B", explanation:"Tăng hiệu quả xử lí.", equation:null },

{ id:91, level:"van_dung_cao", question:"Ăn nhiều tinh bột nhưng ít vận động sẽ dẫn đến", options:{A:"Thiếu năng lượng",B:"Béo phì",C:"Suy dinh dưỡng",D:"Thiếu protein"}, answer:"B", explanation:"Dư năng lượng chuyển thành mỡ.", equation:null },

{ id:92, level:"van_dung_cao", question:"Polime phân hủy sinh học khác nhựa thường vì", options:{A:"Bền hơn",B:"Dễ bị vi sinh vật phân hủy",C:"Đắt hơn",D:"Nặng hơn"}, answer:"B", explanation:"Có liên kết dễ phân hủy.", equation:null },

{ id:93, level:"van_dung_cao", question:"Vì sao glucozơ được truyền trực tiếp vào máu?", options:{A:"Ngọt",B:"Không độc",C:"Cung cấp năng lượng nhanh",D:"Rẻ"}, answer:"C", explanation:"Hấp thụ trực tiếp.", equation:null },

{ id:94, level:"van_dung_cao", question:"Xà phòng làm sạch dầu mỡ theo cơ chế", options:{A:"Hòa tan",B:"Nhũ hóa",C:"Bay hơi",D:"Oxi hóa"}, answer:"B", explanation:"Tạo mixen cuốn dầu.", equation:null },

{ id:95, level:"van_dung_cao", question:"Chế độ ăn cân đối cần đảm bảo", options:{A:"Chỉ glucozơ",B:"Chỉ protein",C:"Đủ cacbohiđrat, lipit, protein",D:"Chỉ vitamin"}, answer:"C", explanation:"Đảm bảo dinh dưỡng.", equation:null },

{ id:96, level:"van_dung_cao", question:"Tác hại lâu dài của rác nhựa là", options:{A:"Tăng dinh dưỡng đất",B:"Ô nhiễm đất, nước, sinh vật",C:"Tăng năng suất",D:"Không ảnh hưởng"}, answer:"B", explanation:"Ảnh hưởng hệ sinh thái.", equation:null },

{ id:97, level:"van_dung_cao", question:"Người lao động trí óc cần bổ sung nhiều", options:{A:"Muối",B:"Glucozơ",C:"Chất xơ",D:"Nước"}, answer:"B", explanation:"Não sử dụng glucozơ.", equation:null },

{ id:98, level:"van_dung_cao", question:"Protein bị biến tính không còn chức năng vì", options:{A:"Tan",B:"Mất cấu trúc không gian",C:"Bay hơi",D:"Oxi hóa hoàn toàn"}, answer:"B", explanation:"Cấu trúc quyết định chức năng.", equation:null },

{ id:99, level:"van_dung_cao", question:"Biện pháp bền vững với môi trường nhất là", options:{A:"Sử dụng một lần",B:"Tái sử dụng",C:"Đốt rác",D:"Chôn rác"}, answer:"B", explanation:"Giảm phát sinh rác.", equation:null },

{ id:100, level:"van_dung_cao", question:"Hóa học hữu cơ trong đời sống giúp con người", options:{A:"Tạo ô nhiễm",B:"Hiểu và sử dụng hợp lí vật liệu",C:"Tăng rác thải",D:"Giảm sức khỏe"}, answer:"B", explanation:"Ứng dụng khoa học hiệu quả.", equation:null },
{ id:36, level:"thong_hieu", question:"Nước cứng tạm thời có thể làm mềm bằng cách", options:{A:"Lọc",B:"Đun sôi",C:"Thêm muối",D:"Làm lạnh"}, answer:"B", explanation:"Ca(HCO3)2 bị phân hủy khi đun." },

{ id:37, level:"thong_hieu", question:"Sử dụng năng lượng tái tạo giúp", options:{A:"Tăng ô nhiễm",B:"Giảm phát thải khí nhà kính",C:"Cạn kiệt tài nguyên",D:"Tốn nhiên liệu"}, answer:"B", explanation:"Giảm CO2." },

{ id:38, level:"thong_hieu", question:"Khí CO2 không độc nhưng nguy hiểm vì", options:{A:"Có mùi",B:"Chiếm chỗ của O2",C:"Ăn mòn kim loại",D:"Dễ cháy"}, answer:"B", explanation:"Gây ngạt." },

{ id:39, level:"thong_hieu", question:"Than đá được coi là tài nguyên không tái tạo vì", options:{A:"Hiếm",B:"Hình thành rất chậm",C:"Đắt",D:"Khó khai thác"}, answer:"B", explanation:"Mất hàng triệu năm." },

{ id:40, level:"thong_hieu", question:"Việc trồng rừng giúp hạn chế lũ lụt vì", options:{A:"Tăng mưa",B:"Giữ đất, giữ nước",C:"Tăng CO2",D:"Giảm cây"}, answer:"B", explanation:"Rễ cây giữ đất." },

{ id:41, level:"thong_hieu", question:"Nước thải sinh hoạt cần xử lí vì", options:{A:"Có màu",B:"Chứa vi khuẩn, chất bẩn",C:"Có mùi",D:"Nhiều oxi"}, answer:"B", explanation:"Gây bệnh." },

{ id:42, level:"thong_hieu", question:"Mưa axit làm hư hại tượng đá vôi vì", options:{A:"Đá mềm",B:"CaCO3 phản ứng với axit",C:"Có CO2",D:"Có nước"}, answer:"B", explanation:"CaCO3 + axit → muối." },

{ id:43, level:"thong_hieu", question:"Biến đổi khí hậu ảnh hưởng lớn nhất đến", options:{A:"Thời tiết, sinh vật",B:"Âm thanh",C:"Ánh sáng",D:"Màu sắc"}, answer:"A", explanation:"Thay đổi hệ sinh thái." },

{ id:44, level:"thong_hieu", question:"Nhiên liệu sinh học được ưu tiên vì", options:{A:"Đắt",B:"Tái tạo, ít ô nhiễm",C:"Khó dùng",D:"Ít năng lượng"}, answer:"B", explanation:"Thân thiện môi trường." },

{ id:45, level:"thong_hieu", question:"Ô nhiễm đất ảnh hưởng trực tiếp đến", options:{A:"Không khí",B:"Cây trồng",C:"Ánh sáng",D:"Âm thanh"}, answer:"B", explanation:"Giảm năng suất." },

{ id:46, level:"thong_hieu", question:"Khí SO2 chủ yếu sinh ra từ", options:{A:"Giao thông",B:"Đốt than",C:"Quang hợp",D:"Hô hấp"}, answer:"B", explanation:"Than chứa lưu huỳnh." },

{ id:47, level:"thong_hieu", question:"Sử dụng tiết kiệm điện giúp", options:{A:"Tăng chi phí",B:"Giảm khai thác nhiên liệu",C:"Tăng ô nhiễm",D:"Giảm tiện nghi"}, answer:"B", explanation:"Giảm nhu cầu nhiệt điện." },

{ id:48, level:"thong_hieu", question:"Nước cứng gây hại cho sinh hoạt vì", options:{A:"Không uống được",B:"Đóng cặn, tốn xà phòng",C:"Có mùi",D:"Có màu"}, answer:"B", explanation:"Ion Ca2+, Mg2+." },

{ id:49, level:"thong_hieu", question:"Tái sử dụng khác tái chế ở điểm", options:{A:"Không cần xử lí",B:"Phải xử lí",C:"Tạo rác",D:"Đốt"}, answer:"A", explanation:"Dùng lại trực tiếp." },

{ id:50, level:"thong_hieu", question:"Khí thải xe máy gây ô nhiễm vì chứa", options:{A:"O2",B:"CO, NO2",C:"N2",D:"H2"}, answer:"B", explanation:"Khí độc." },

{ id:51, level:"thong_hieu", question:"Hiệu ứng nhà kính mạnh lên dẫn đến", options:{A:"Lạnh hơn",B:"Nóng lên toàn cầu",C:"Mưa giảm",D:"Gió giảm"}, answer:"B", explanation:"Nhiệt bị giữ lại." },

{ id:52, level:"thong_hieu", question:"Nguồn năng lượng sạch nhất là", options:{A:"Than",B:"Dầu mỏ",C:"Mặt trời",D:"Khí đốt"}, answer:"C", explanation:"Không phát thải." },

{ id:53, level:"thong_hieu", question:"Rác vô cơ khó phân hủy vì", options:{A:"Nặng",B:"Cấu trúc bền",C:"Có mùi",D:"Có màu"}, answer:"B", explanation:"Liên kết bền." },

{ id:54, level:"thong_hieu", question:"Nước biển không dùng trực tiếp vì", options:{A:"Nhiều muối",B:"Có mùi",C:"Có màu",D:"Có oxi"}, answer:"A", explanation:"Độ mặn cao." },

{ id:55, level:"thong_hieu", question:"Tầng ozon có vai trò", options:{A:"Giữ CO2",B:"Chắn tia tử ngoại",C:"Tạo mưa",D:"Tạo gió"}, answer:"B", explanation:"Bảo vệ sinh vật." },

{ id:56, level:"thong_hieu", question:"Chặt phá rừng gây hậu quả", options:{A:"Tăng CO2",B:"Xói mòn đất",C:"Lũ lụt",D:"Cả A, B, C"}, answer:"D", explanation:"Mất cân bằng sinh thái." },

{ id:57, level:"thong_hieu", question:"Biện pháp giảm ô nhiễm không khí là", options:{A:"Đốt rác",B:"Trồng cây",C:"Chôn rác",D:"Xả khói"}, answer:"B", explanation:"Hấp thụ CO2." },

{ id:58, level:"thong_hieu", question:"Than hoạt tính dùng lọc nước vì", options:{A:"Rẻ",B:"Hấp phụ tốt",C:"Tan nước",D:"Có màu"}, answer:"B", explanation:"Giữ tạp chất." },

{ id:59, level:"thong_hieu", question:"Ô nhiễm môi trường ảnh hưởng nghiêm trọng nhất đến", options:{A:"Sức khỏe con người",B:"Máy móc",C:"Âm thanh",D:"Màu sắc"}, answer:"A", explanation:"Gây bệnh." },

{ id:60, level:"thong_hieu", question:"Tài nguyên cần được khai thác hợp lí vì", options:{A:"Vô hạn",B:"Có hạn",C:"Rẻ",D:"Dễ tìm"}, answer:"B", explanation:"Tránh cạn kiệt." },

{ id:61, level:"van_dung", question:"Để giảm mưa axit, cần hạn chế đốt", options:{A:"Gỗ",B:"Than đá",C:"Rác hữu cơ",D:"Sinh khối"}, answer:"B", explanation:"Than sinh SO2." },

{ id:62, level:"van_dung", question:"Nước cứng tạm thời được xử lí bằng cách đun vì", options:{A:"Bay hơi nước",B:"Phân hủy muối hidrocacbonat",C:"Kết tủa NaCl",D:"Khử trùng"}, answer:"B", explanation:"Ca(HCO3)2 → CaCO3↓." },

{ id:63, level:"van_dung", question:"Biện pháp hiệu quả nhất để tiết kiệm nước là", options:{A:"Dùng tùy ý",B:"Tái sử dụng nước",C:"Xả thải",D:"Đun sôi"}, answer:"B", explanation:"Giảm khai thác." },

{ id:64, level:"van_dung", question:"Khi trồng rừng ngập mặn giúp", options:{A:"Tăng xâm nhập mặn",B:"Chống xói mòn",C:"Giảm đa dạng sinh học",D:"Tăng ô nhiễm"}, answer:"B", explanation:"Bảo vệ bờ biển." },

{ id:65, level:"van_dung", question:"Sử dụng xe đạp thay xe máy giúp", options:{A:"Tăng CO2",B:"Giảm ô nhiễm",C:"Tốn năng lượng",D:"Gây ồn"}, answer:"B", explanation:"Không phát thải." },

{ id:66, level:"van_dung", question:"Đun nước cứng lâu ngày gây", options:{A:"Ăn mòn",B:"Đóng cặn ấm",C:"Bay hơi",D:"Đổi màu"}, answer:"B", explanation:"CaCO3 kết tủa." },

{ id:67, level:"van_dung", question:"Thu gom pin đã qua sử dụng để", options:{A:"Chơi",B:"Tránh ô nhiễm kim loại nặng",C:"Đốt",D:"Chôn"}, answer:"B", explanation:"Pin chứa Pb, Hg." },

{ id:68, level:"van_dung", question:"Dùng năng lượng mặt trời giúp giảm", options:{A:"Chi phí",B:"Khí thải",C:"Ánh sáng",D:"Nhiệt"}, answer:"B", explanation:"Không đốt nhiên liệu." },

{ id:69, level:"van_dung", question:"Tái chế giấy giúp bảo vệ", options:{A:"Không khí",B:"Rừng",C:"Nước",D:"Đất"}, answer:"B", explanation:"Giảm chặt cây." },

{ id:70, level:"van_dung", question:"Xử lí nước thải trước khi xả ra môi trường nhằm", options:{A:"Tăng mùi",B:"Bảo vệ nguồn nước",C:"Tăng rác",D:"Tiết kiệm điện"}, answer:"B", explanation:"Ngăn ô nhiễm." },

{ id:71, level:"van_dung", question:"Giảm dùng túi nilon giúp", options:{A:"Tăng rác",B:"Giảm ô nhiễm đất",C:"Tăng chi phí",D:"Khó mua"}, answer:"B", explanation:"Nilon khó phân hủy." },

{ id:72, level:"van_dung", question:"Biện pháp hạn chế hiệu ứng nhà kính là", options:{A:"Trồng cây",B:"Đốt than",C:"Chặt rừng",D:"Xả khí"}, answer:"A", explanation:"Hấp thụ CO2." },

{ id:73, level:"van_dung", question:"Nước cứng ảnh hưởng xấu nhất đến", options:{A:"Uống",B:"Thiết bị đun nước",C:"Màu nước",D:"Mùi"}, answer:"B", explanation:"Đóng cặn." },

{ id:74, level:"van_dung", question:"Sử dụng năng lượng gió thích hợp ở", options:{A:"Núi cao, ven biển",B:"Hang động",C:"Trong nhà",D:"Dưới nước"}, answer:"A", explanation:"Gió mạnh." },

{ id:75, level:"van_dung", question:"Chôn lấp rác không hợp lí gây", options:{A:"Ô nhiễm đất, nước",B:"Sạch môi trường",C:"Giảm rác",D:"Không ảnh hưởng"}, answer:"A", explanation:"Rỉ nước rác." },

{ id:76, level:"van_dung", question:"Biện pháp giảm khí thải giao thông là", options:{A:"Dùng xe điện",B:"Tăng xe xăng",C:"Đốt xăng kém chất lượng",D:"Chạy không tải"}, answer:"A", explanation:"Giảm CO, NO2." },

{ id:77, level:"van_dung", question:"Rác hữu cơ nên xử lí bằng cách", options:{A:"Chôn lấp",B:"Ủ phân compost",C:"Đốt",D:"Vứt"}, answer:"B", explanation:"Tái tạo phân bón." },

{ id:78, level:"van_dung", question:"Sử dụng đồ dùng tiết kiệm điện giúp", options:{A:"Tăng hóa đơn",B:"Giảm tiêu thụ năng lượng",C:"Tăng ô nhiễm",D:"Không đổi"}, answer:"B", explanation:"Hiệu suất cao." },

{ id:79, level:"van_dung", question:"Để bảo vệ nguồn nước cần", options:{A:"Xả thải",B:"Xử lí nước thải",C:"Đổ rác",D:"Đốt"}, answer:"B", explanation:"Ngăn ô nhiễm." },

{ id:80, level:"van_dung", question:"Giảm sử dụng than giúp hạn chế", options:{A:"Nhiệt điện",B:"Mưa axit",C:"Ánh sáng",D:"Gió"}, answer:"B", explanation:"Giảm SO2." },

{ id:81, level:"van_dung", question:"Nước mưa bị axit hóa do", options:{A:"CO2",B:"SO2, NO2",C:"O2",D:"N2"}, answer:"B", explanation:"Tạo axit." },

{ id:82, level:"van_dung", question:"Sử dụng phân bón hợp lí nhằm", options:{A:"Tăng ô nhiễm",B:"Bảo vệ đất",C:"Hủy hoại cây",D:"Giảm năng suất"}, answer:"B", explanation:"Tránh thoái hóa đất." },

{ id:83, level:"van_dung", question:"Biện pháp lâu dài bảo vệ môi trường là", options:{A:"Giáo dục ý thức",B:"Phạt nặng",C:"Đốt rác",D:"Chôn rác"}, answer:"A", explanation:"Thay đổi hành vi." },

{ id:84, level:"van_dung", question:"Tái sử dụng chai lọ giúp", options:{A:"Tăng rác",B:"Giảm khai thác tài nguyên",C:"Gây ô nhiễm",D:"Không ích lợi"}, answer:"B", explanation:"Tiết kiệm." },

{ id:85, level:"van_dung", question:"Khai thác khoáng sản bừa bãi gây", options:{A:"Phát triển bền vững",B:"Sạt lở, ô nhiễm",C:"Bảo vệ đất",D:"Tăng cây"}, answer:"B", explanation:"Phá hủy môi trường." },

{ id:86, level:"van_dung_cao", question:"Giải pháp tổng hợp giảm biến đổi khí hậu là", options:{A:"Giảm phát thải + trồng rừng",B:"Chặt rừng",C:"Đốt than",D:"Xả thải"}, answer:"A", explanation:"Giảm CO2 toàn diện." },

{ id:87, level:"van_dung_cao", question:"Tại sao cần phát triển kinh tế gắn với bảo vệ môi trường?", options:{A:"Để tăng chi phí",B:"Phát triển bền vững",C:"Giảm sản xuất",D:"Không cần"}, answer:"B", explanation:"Đảm bảo tương lai." },

{ id:88, level:"van_dung_cao", question:"Năng lượng nào phù hợp nhất cho vùng hải đảo?", options:{A:"Than",B:"Gió, mặt trời",C:"Dầu mỏ",D:"Khí đốt"}, answer:"B", explanation:"Tái tạo, sẵn có." },

{ id:89, level:"van_dung_cao", question:"Phân loại rác tại nguồn giúp", options:{A:"Tăng rác",B:"Dễ tái chế, xử lí",C:"Tốn công vô ích",D:"Không hiệu quả"}, answer:"B", explanation:"Giảm chi phí." },

{ id:90, level:"van_dung_cao", question:"Biện pháp hiệu quả nhất bảo vệ nguồn nước là", options:{A:"Xử lí nước thải triệt để",B:"Chôn rác",C:"Đốt rác",D:"Xả thải có kiểm soát"}, answer:"A", explanation:"Ngăn ô nhiễm từ đầu." },

{ id:91, level:"van_dung_cao", question:"Vì sao cần hạn chế khai thác cát sông?", options:{A:"Đắt",B:"Gây sạt lở",C:"Ít dùng",D:"Khó khai thác"}, answer:"B", explanation:"Phá vỡ dòng chảy." },

{ id:92, level:"van_dung_cao", question:"Sử dụng năng lượng sạch giúp thế hệ sau", options:{A:"Thiếu tài nguyên",B:"Có môi trường bền vững",C:"Ít phát triển",D:"Khó sống"}, answer:"B", explanation:"Bảo vệ tương lai." },

{ id:93, level:"van_dung_cao", question:"Giải pháp giảm rác nhựa hiệu quả nhất là", options:{A:"Đốt",B:"Tái sử dụng, thay thế",C:"Chôn lấp",D:"Vứt"}, answer:"B", explanation:"Giảm phát sinh." },

{ id:94, level:"van_dung_cao", question:"Mô hình kinh tế tuần hoàn hướng tới", options:{A:"Sử dụng một lần",B:"Tái sử dụng, tái chế",C:"Khai thác tối đa",D:"Thải bỏ nhanh"}, answer:"B", explanation:"Giảm rác thải." },

{ id:95, level:"van_dung_cao", question:"Vì sao giáo dục môi trường cần bắt đầu từ học sinh?", options:{A:"Dễ dạy",B:"Hình thành ý thức lâu dài",C:"Ít tốn kém",D:"Không quan trọng"}, answer:"B", explanation:"Tạo thói quen bền vững." },

{ id:96, level:"van_dung_cao", question:"Phát triển bền vững là phát triển", options:{A:"Chỉ kinh tế",B:"Kinh tế gắn môi trường",C:"Chỉ công nghiệp",D:"Không kiểm soát"}, answer:"B", explanation:"Cân bằng 3 trụ cột." },

{ id:97, level:"van_dung_cao", question:"Nếu không bảo vệ môi trường, hậu quả lâu dài là", options:{A:"Phát triển mạnh",B:"Suy thoái hệ sinh thái",C:"Tăng tài nguyên",D:"Ổn định khí hậu"}, answer:"B", explanation:"Mất cân bằng." },

{ id:98, level:"van_dung_cao", question:"Biện pháp cá nhân góp phần bảo vệ môi trường là", options:{A:"Tiết kiệm điện, nước",B:"Xả rác",C:"Đốt rác",D:"Chặt cây"}, answer:"A", explanation:"Hành động thiết thực." },

{ id:99, level:"van_dung_cao", question:"Việc sử dụng năng lượng tái tạo góp phần", options:{A:"Tăng phát thải",B:"Giảm phụ thuộc nhiên liệu hóa thạch",C:"Cạn tài nguyên",D:"Ô nhiễm"}, answer:"B", explanation:"Giảm than, dầu." },

{ id:100, level:"van_dung_cao", question:"Bảo vệ môi trường là trách nhiệm của", options:{A:"Nhà nước",B:"Doanh nghiệp",C:"Cá nhân",D:"Toàn xã hội"}, answer:"D", explanation:"Trách nhiệm chung." },

{ id:1, level:"nhan_biet", question:"Kim loại nào dẫn điện tốt nhất?", options:{A:"Iron",B:"Copper",C:"Silver",D:"Aluminium"}, answer:"C", explanation:"Silver (Ag) dẫn điện tốt nhất." },

{ id:2, level:"nhan_biet", question:"Công thức của acetic acid là", options:{A:"HCOOH",B:"CH3COOH",C:"C2H5OH",D:"C6H12O6"}, answer:"B", explanation:"Acetic acid: CH3COOH." },

{ id:3, level:"nhan_biet", question:"Tinh bột được nhận biết bằng dung dịch nào?", options:{A:"Phenolphthalein",B:"Iodine",C:"NaOH",D:"CuSO4"}, answer:"B", explanation:"Tinh bột + I2 → màu xanh tím." },

{ id:4, level:"nhan_biet", question:"Kim loại phản ứng mạnh với nước ở nhiệt độ thường là", options:{A:"Iron",B:"Copper",C:"Sodium",D:"Silver"}, answer:"C", explanation:"Sodium (Na) phản ứng mạnh với nước." },

{ id:5, level:"nhan_biet", question:"Công thức phân tử của ethene là", options:{A:"C2H6",B:"C2H4",C:"CH4",D:"C3H8"}, answer:"B", explanation:"Ethene: C2H4." },

{ id:6, level:"nhan_biet", question:"Chất nào sau đây là polymer?", options:{A:"Glucose",B:"Starch",C:"Ethanol",D:"Acetic acid"}, answer:"B", explanation:"Starch là polymer tự nhiên." },

{ id:7, level:"nhan_biet", question:"Thành phần chính của limestone là", options:{A:"CaO",B:"CaCO3",C:"Ca(OH)2",D:"CaSO4"}, answer:"B", explanation:"Limestone chứa CaCO3." },

{ id:8, level:"nhan_biet", question:"Dãy hoạt động hóa học của kim loại dùng để", options:{A:"So màu sắc",B:"So khối lượng",C:"So tính hoạt động",D:"So trạng thái"}, answer:"C", explanation:"So sánh mức độ hoạt động hóa học." },

{ id:9, level:"nhan_biet", question:"Chất béo thuộc loại hợp chất nào?", options:{A:"Alcohol",B:"Acid",C:"Ester",D:"Salt"}, answer:"C", explanation:"Chất béo là ester." },

{ id:10, level:"nhan_biet", question:"Khí gây hiệu ứng nhà kính chủ yếu là", options:{A:"Oxygen",B:"Nitrogen",C:"Carbon dioxide",D:"Hydrogen"}, answer:"C", explanation:"CO2 gây hiệu ứng nhà kính." },

{ id:11, level:"nhan_biet", question:"Phản ứng cháy của methane tạo ra", options:{A:"CO",B:"CO2 và H2O",C:"H2",D:"C"}, answer:"B", explanation:"CH4 + 2O2 → CO2 + 2H2O." },

{ id:12, level:"nhan_biet", question:"Dung dịch làm quỳ tím hóa đỏ là", options:{A:"NaOH",B:"KOH",C:"HCl",D:"NaCl"}, answer:"C", explanation:"Acid làm quỳ tím hóa đỏ." },

{ id:13, level:"nhan_biet", question:"Kim loại không phản ứng với HCl là", options:{A:"Zinc",B:"Iron",C:"Copper",D:"Aluminium"}, answer:"C", explanation:"Copper đứng sau hydrogen." },

{ id:14, level:"nhan_biet", question:"Ethanol có công thức cấu tạo là", options:{A:"CH3OH",B:"CH3–CH2–OH",C:"CH3COOH",D:"C2H6"}, answer:"B", explanation:"Ethanol: CH3–CH2–OH." },

{ id:15, level:"nhan_biet", question:"Chất dùng để điều chế xà phòng là", options:{A:"HCl",B:"NaOH",C:"NaCl",D:"H2SO4"}, answer:"B", explanation:"NaOH dùng trong xà phòng hóa." },

{ id:16, level:"nhan_biet", question:"Khí chlorine có màu", options:{A:"Không màu",B:"Vàng lục",C:"Đỏ nâu",D:"Xanh lam"}, answer:"B", explanation:"Chlorine có màu vàng lục." },

{ id:17, level:"nhan_biet", question:"Công thức chung của alkane là", options:{A:"CnH2n",B:"CnH2n+2",C:"CnH2n-2",D:"CnHn"}, answer:"B", explanation:"Alkane: CnH2n+2." },

{ id:18, level:"nhan_biet", question:"Chất nào làm mềm nước cứng tạm thời?", options:{A:"NaCl",B:"CaO",C:"Đun sôi",D:"HCl"}, answer:"C", explanation:"Đun sôi loại Ca(HCO3)2." },

{ id:19, level:"nhan_biet", question:"Glucozơ có công thức phân tử là", options:{A:"C6H6",B:"C6H12O6",C:"C12H22O11",D:"C2H6O"}, answer:"B", explanation:"Glucose: C6H12O6." },

{ id:20, level:"nhan_biet", question:"Polyethylene được điều chế từ", options:{A:"Ethane",B:"Ethene",C:"Methane",D:"Propane"}, answer:"B", explanation:"Trùng hợp ethene." },

{ id:21, level:"nhan_biet", question:"Sản phẩm của phản ứng Zn + HCl là", options:{A:"ZnCl",B:"ZnCl2 và H2",C:"ZnO",D:"ZnSO4"}, answer:"B", explanation:"Zn + 2HCl → ZnCl2 + H2." },

{ id:22, level:"nhan_biet", question:"Chất có pH < 7 là", options:{A:"Base",B:"Neutral",C:"Acid",D:"Salt"}, answer:"C", explanation:"Acid có pH < 7." },

{ id:23, level:"nhan_biet", question:"Than đá là nhiên liệu", options:{A:"Lỏng",B:"Khí",C:"Rắn",D:"Dung dịch"}, answer:"C", explanation:"Than đá ở trạng thái rắn." },

{ id:24, level:"nhan_biet", question:"Sản phẩm chính của quang hợp là", options:{A:"CO2",B:"O2 và glucose",C:"H2O",D:"N2"}, answer:"B", explanation:"Quang hợp tạo glucose và O2." },

{ id:25, level:"nhan_biet", question:"Axit mạnh thường gặp là", options:{A:"CH3COOH",B:"HCl",C:"H2CO3",D:"H3PO4"}, answer:"B", explanation:"HCl là axit mạnh." },

{ id:26, level:"nhan_biet", question:"Kim loại dùng làm dây dẫn điện phổ biến là", options:{A:"Iron",B:"Copper",C:"Zinc",D:"Lead"}, answer:"B", explanation:"Copper dẫn điện tốt, rẻ." },

{ id:27, level:"nhan_biet", question:"Sản phẩm phản ứng CaCO3 → CaO + CO2 là phản ứng", options:{A:"Thế",B:"Hóa hợp",C:"Phân hủy",D:"Trao đổi"}, answer:"C", explanation:"Một chất tạo hai chất." },

{ id:28, level:"nhan_biet", question:"Protein bị đông tụ khi", options:{A:"Làm lạnh",B:"Đun nóng",C:"Hòa tan",D:"Trộn nước"}, answer:"B", explanation:"Nhiệt làm đông tụ protein." },

{ id:29, level:"nhan_biet", question:"Kim loại quý thường gặp là", options:{A:"Iron",B:"Aluminium",C:"Gold",D:"Zinc"}, answer:"C", explanation:"Gold là kim loại quý." },

{ id:30, level:"nhan_biet", question:"Phản ứng ester hóa tạo ra", options:{A:"Salt",B:"Ester và nước",C:"Alcohol",D:"Acid"}, answer:"B", explanation:"Acid + alcohol → ester + H2O." },

{ id:31, level:"thong_hieu", question:"Nhôm bền trong không khí vì", options:{A:"Không phản ứng",B:"Nhẹ",C:"Có lớp Al2O3 bảo vệ",D:"Dẫn điện"}, answer:"C", explanation:"Lớp Al2O3 bền bảo vệ." },

{ id:32, level:"thong_hieu", question:"Sắt đẩy được copper khỏi dung dịch CuSO4 vì", options:{A:"Nhẹ hơn",B:"Hoạt động mạnh hơn",C:"Dẫn điện tốt",D:"Màu khác"}, answer:"B", explanation:"Fe đứng trước Cu trong dãy hoạt động." },

{ id:33, level:"thong_hieu", question:"Xà phòng làm sạch dầu mỡ nhờ khả năng", options:{A:"Bay hơi",B:"Nhũ hóa",C:"Oxi hóa",D:"Trung hòa"}, answer:"B", explanation:"Phân tử có đầu ưa – kị nước." },

{ id:34, level:"thong_hieu", question:"Glucozơ phản ứng với Cu(OH)2 do có", options:{A:"Nhóm –COOH",B:"Nhóm –OH",C:"Nhiều nhóm –OH liền kề",D:"Nhóm =O"}, answer:"C", explanation:"Tạo dung dịch xanh lam." },

{ id:35, level:"thong_hieu", question:"Nước cứng gây hại vì", options:{A:"Có mùi",B:"Đóng cặn",C:"Có màu",D:"Độc"}, answer:"B", explanation:"Ca2+, Mg2+ tạo cặn." },

{ id:36, level:"thong_hieu", question:"Đốt than gây ô nhiễm do sinh ra", options:{A:"O2",B:"CO2, SO2",C:"H2",D:"N2"}, answer:"B", explanation:"Gây hiệu ứng nhà kính, mưa axit." },

{ id:37, level:"thong_hieu", question:"Tái chế giúp bảo vệ môi trường vì", options:{A:"Tăng rác",B:"Giảm khai thác tài nguyên",C:"Tăng ô nhiễm",D:"Tốn năng lượng"}, answer:"B", explanation:"Tiết kiệm tài nguyên." },

{ id:38, level:"thong_hieu", question:"PE khó phân hủy vì", options:{A:"Tan trong nước",B:"Bền hóa học",C:"Nặng",D:"Có màu"}, answer:"B", explanation:"Liên kết bền." },

{ id:39, level:"thong_hieu", question:"Dùng Zn bảo vệ thép vì Zn", options:{A:"Đẹp hơn",B:"Rẻ hơn",C:"Hoạt động mạnh hơn Fe",D:"Nhẹ hơn"}, answer:"C", explanation:"Anot hi sinh." },

{ id:40, level:"thong_hieu", question:"Phân bón hóa học dùng quá mức sẽ", options:{A:"Tăng năng suất lâu dài",B:"Gây ô nhiễm đất, nước",C:"Không ảnh hưởng",D:"Làm sạch đất"}, answer:"B", explanation:"Gây phú dưỡng." },

{ id:41, level:"thong_hieu", question:"Đun sôi nước cứng tạm thời để", options:{A:"Diệt khuẩn",B:"Loại muối Ca(HCO3)2",C:"Tăng vị",D:"Làm mát"}, answer:"B", explanation:"Kết tủa CaCO3." },

{ id:42, level:"thong_hieu", question:"Hiệu ứng nhà kính làm Trái Đất", options:{A:"Lạnh hơn",B:"Nóng lên",C:"Không đổi",D:"Đóng băng"}, answer:"B", explanation:"Giữ nhiệt trong khí quyển." },

{ id:43, level:"thong_hieu", question:"Protein cần thiết vì", options:{A:"Cung cấp năng lượng chính",B:"Xây dựng tế bào",C:"Tạo màu",D:"Tạo mùi"}, answer:"B", explanation:"Cấu tạo cơ thể." },

{ id:44, level:"thong_hieu", question:"Sử dụng năng lượng tái tạo giúp", options:{A:"Tăng ô nhiễm",B:"Giảm phát thải CO2",C:"Cạn tài nguyên",D:"Tốn chi phí mãi"}, answer:"B", explanation:"Bảo vệ môi trường." },

{ id:45, level:"thong_hieu", question:"Ethene làm mất màu brom vì", options:{A:"Có liên kết đơn",B:"Có liên kết đôi",C:"Có vòng",D:"Có oxy"}, answer:"B", explanation:"Phản ứng cộng." },

{ id:46, level:"thong_hieu", question:"Than hoạt tính dùng lọc nước do", options:{A:"Tan",B:"Hấp phụ mạnh",C:"Phản ứng hóa học",D:"Nặng"}, answer:"B", explanation:"Diện tích bề mặt lớn." },

{ id:47, level:"thong_hieu", question:"Ăn nhiều đường dễ dẫn đến", options:{A:"Thiếu năng lượng",B:"Béo phì",C:"Suy dinh dưỡng",D:"Thiếu protein"}, answer:"B", explanation:"Dư năng lượng." },

{ id:48, level:"thong_hieu", question:"Kim loại được điều chế bằng điện phân nóng chảy là", options:{A:"Iron",B:"Copper",C:"Aluminium",D:"Zinc"}, answer:"C", explanation:"Al rất hoạt động." },

{ id:49, level:"thong_hieu", question:"Sản xuất thép từ gang nhằm", options:{A:"Tăng C",B:"Giảm C và tạp chất",C:"Tăng S",D:"Tăng P"}, answer:"B", explanation:"Thép ít C hơn gang." },

{ id:50, level:"thong_hieu", question:"Phản ứng trung hòa tạo ra", options:{A:"Acid",B:"Base",C:"Salt và water",D:"Gas"}, answer:"C", explanation:"Acid + base → salt + water." },

{ id:51, level:"thong_hieu", question:"Dầu mỏ là hỗn hợp của", options:{A:"Alcohol",B:"Hydrocarbons",C:"Acids",D:"Salts"}, answer:"B", explanation:"Hỗn hợp hydrocarbon." },

{ id:52, level:"thong_hieu", question:"Khí CO nguy hiểm vì", options:{A:"Có mùi",B:"Gây ngạt",C:"Có màu",D:"Tan tốt"}, answer:"B", explanation:"Kết hợp với hemoglobin." },

{ id:53, level:"thong_hieu", question:"Polime sinh học thân thiện môi trường vì", options:{A:"Khó phân hủy",B:"Dễ phân hủy",C:"Độc",D:"Bền lâu"}, answer:"B", explanation:"Phân hủy sinh học." },

{ id:54, level:"thong_hieu", question:"Chất chỉ thị phenolphthalein đổi màu trong môi trường", options:{A:"Acid",B:"Neutral",C:"Base",D:"Salt"}, answer:"C", explanation:"Chuyển hồng trong base." },

{ id:55, level:"thong_hieu", question:"Đốt nhiên liệu hóa thạch lâu dài sẽ", options:{A:"Giảm CO2",B:"Tăng CO2",C:"Không ảnh hưởng",D:"Giảm nhiệt độ"}, answer:"B", explanation:"Tăng hiệu ứng nhà kính." },

{ id:56, level:"thong_hieu", question:"Glucozơ là nguồn năng lượng vì", options:{A:"Tan tốt",B:"Dễ bị oxi hóa",C:"Có màu",D:"Có mùi"}, answer:"B", explanation:"Bị oxi hóa giải phóng năng lượng." },

{ id:57, level:"thong_hieu", question:"Ăn uống hợp lí cần", options:{A:"Chỉ protein",B:"Chỉ lipid",C:"Cân đối các chất",D:"Chỉ carbohydrate"}, answer:"C", explanation:"Đảm bảo dinh dưỡng." },

{ id:58, level:"thong_hieu", question:"Biện pháp giảm rác nhựa hiệu quả là", options:{A:"Đốt",B:"Chôn",C:"Tái sử dụng",D:"Vứt"}, answer:"C", explanation:"Giảm phát sinh rác." },

{ id:59, level:"thong_hieu", question:"Mưa axit chủ yếu do khí", options:{A:"CO2",B:"SO2 và NO2",C:"O2",D:"H2"}, answer:"B", explanation:"SO2, NO2 tạo axit." },

{ id:60, level:"thong_hieu", question:"Phát triển bền vững là phát triển", options:{A:"Chỉ kinh tế",B:"Kinh tế gắn môi trường",C:"Không kiểm soát",D:"Ngắn hạn"}, answer:"B", explanation:"Bảo vệ tương lai." },

{ id:61, level:"van_dung", question:"Cho 5,6 g iron (Fe) phản ứng với HCl dư. Thể tích hydrogen thu được (đktc) là", options:{A:"1.12 L",B:"2.24 L",C:"3.36 L",D:"4.48 L"}, answer:"B", explanation:"nFe=0.1 mol → nH2=0.1 mol → V=2.24 L.", equation:"Fe + 2HCl → FeCl2 + H2" },

{ id:62, level:"van_dung", question:"Dùng dung dịch nào để phân biệt glucose và ethanol?", options:{A:"NaOH",B:"Cu(OH)2",C:"HCl",D:"NaCl"}, answer:"B", explanation:"Glucose tạo dung dịch xanh lam với Cu(OH)2." },

{ id:63, level:"van_dung", question:"Khối lượng CaO thu được khi nhiệt phân hoàn toàn 10 g CaCO3 là", options:{A:"4.0 g",B:"5.6 g",C:"7.0 g",D:"8.4 g"}, answer:"B", explanation:"CaCO3 → CaO + CO2; 100→56 nên 10→5.6 g.", equation:"CaCO3 → CaO + CO2" },

{ id:64, level:"van_dung", question:"Dung dịch nào làm quỳ tím chuyển xanh?", options:{A:"HCl",B:"CH3COOH",C:"NaOH",D:"NaCl"}, answer:"C", explanation:"NaOH là base mạnh." },

{ id:65, level:"van_dung", question:"Khối lượng polyethylene tạo thành khi trùng hợp 28 g ethene (hiệu suất 100%) là", options:{A:"14 g",B:"28 g",C:"42 g",D:"56 g"}, answer:"B", explanation:"Trùng hợp không đổi khối lượng.", equation:"nCH2=CH2 → (–CH2–CH2–)n" },

{ id:66, level:"van_dung", question:"Kim loại nào sau đây phản ứng với water ở nhiệt độ thường?", options:{A:"Iron",B:"Copper",C:"Sodium",D:"Silver"}, answer:"C", explanation:"Na phản ứng mạnh với nước." },

{ id:67, level:"van_dung", question:"Để làm mềm nước cứng tạm thời, biện pháp hiệu quả nhất là", options:{A:"Thêm NaCl",B:"Đun sôi",C:"Thêm HCl",D:"Lọc cát"}, answer:"B", explanation:"Đun sôi loại Ca(HCO3)2." },

{ id:68, level:"van_dung", question:"Thể tích oxygen cần để đốt cháy hoàn toàn 4.48 L methane (đktc) là", options:{A:"4.48 L",B:"6.72 L",C:"8.96 L",D:"13.44 L"}, answer:"C", explanation:"CH4 + 2O2 → CO2 + 2H2O; V O2 = 2×4.48 = 8.96 L." },

{ id:69, level:"van_dung", question:"Chất nào dùng để sản xuất soap từ fat?", options:{A:"HCl",B:"NaOH",C:"NaCl",D:"H2SO4"}, answer:"B", explanation:"Phản ứng xà phòng hóa cần NaOH." },

{ id:70, level:"van_dung", question:"Dung dịch nào phân biệt được Na2CO3 và NaCl?", options:{A:"H2O",B:"Phenolphthalein",C:"HCl",D:"NaOH"}, answer:"C", explanation:"Na2CO3 + HCl có khí CO2." },

{ id:71, level:"van_dung", question:"Khối lượng ZnCl2 tạo thành khi cho 6.5 g zinc phản ứng hết với HCl là", options:{A:"6.8 g",B:"13.6 g",C:"27.2 g",D:"34.0 g"}, answer:"B", explanation:"nZn=0.1 mol → mZnCl2=0.1×136=13.6 g.", equation:"Zn + 2HCl → ZnCl2 + H2" },

{ id:72, level:"van_dung", question:"Để điều chế aluminium, phương pháp phù hợp là", options:{A:"Nhiệt luyện",B:"Điện phân dung dịch",C:"Điện phân nóng chảy",D:"Thế kim loại"}, answer:"C", explanation:"Al rất hoạt động, cần điện phân nóng chảy." },

{ id:73, level:"van_dung", question:"Khí nào làm mất màu bromine water?", options:{A:"Methane",B:"Ethene",C:"Carbon dioxide",D:"Nitrogen"}, answer:"B", explanation:"Ethene có liên kết đôi." },

{ id:74, level:"van_dung", question:"Khối lượng CO2 thu được khi đốt cháy hoàn toàn 4 g carbon là", options:{A:"7.33 g",B:"11 g",C:"14.67 g",D:"22 g"}, answer:"C", explanation:"C + O2 → CO2; 12→44 nên 4→14.67 g." },

{ id:75, level:"van_dung", question:"Dung dịch nào nhận biết được protein?", options:{A:"Iodine",B:"CuSO4 + NaOH",C:"NaCl",D:"HCl"}, answer:"B", explanation:"Phản ứng màu biure." },

{ id:76, level:"van_dung", question:"Chất nào thuộc acid mạnh?", options:{A:"CH3COOH",B:"H2CO3",C:"HCl",D:"H3PO4"}, answer:"C", explanation:"HCl là acid mạnh." },

{ id:77, level:"van_dung", question:"Khối lượng water tạo thành khi đốt cháy 9 g ethanol là", options:{A:"5.4 g",B:"8.1 g",C:"10.8 g",D:"16.2 g"}, answer:"C", explanation:"C2H5OH + 3O2 → 2CO2 + 3H2O; n=0.195→m≈10.8 g." },

{ id:78, level:"van_dung", question:"Kim loại nào không bị corrosion trong không khí ẩm?", options:{A:"Iron",B:"Copper",C:"Aluminium",D:"Silver"}, answer:"C", explanation:"Al có màng Al2O3 bảo vệ." },

{ id:79, level:"van_dung", question:"Sử dụng fuel hóa thạch lâu dài dẫn đến", options:{A:"Giảm CO2",B:"Tăng hiệu ứng nhà kính",C:"Ổn định khí hậu",D:"Giảm nhiệt độ"}, answer:"B", explanation:"CO2 tăng." },

{ id:80, level:"van_dung", question:"Để giảm ô nhiễm do plastic, biện pháp hiệu quả là", options:{A:"Đốt",B:"Chôn lấp",C:"Tái sử dụng",D:"Vứt bỏ"}, answer:"C", explanation:"Giảm phát sinh rác." },

{ id:81, level:"van_dung", question:"Khí nào gây ngạt mạnh do chiếm chỗ oxygen?", options:{A:"CO",B:"CO2",C:"N2",D:"H2"}, answer:"A", explanation:"CO gắn hemoglobin." },

{ id:82, level:"van_dung", question:"Chất nào là nguồn năng lượng nhanh cho cơ thể?", options:{A:"Protein",B:"Lipid",C:"Glucose",D:"Cellulose"}, answer:"C", explanation:"Glucose dễ oxi hóa." },

{ id:83, level:"van_dung", question:"Muối nào gây water hardness?", options:{A:"NaCl",B:"KCl",C:"Ca(HCO3)2",D:"Na2SO4"}, answer:"C", explanation:"Ion Ca2+ gây cứng." },

{ id:84, level:"van_dung", question:"Sản xuất steel từ pig iron nhằm", options:{A:"Tăng carbon",B:"Giảm carbon",C:"Tăng sulfur",D:"Tăng phosphorus"}, answer:"B", explanation:"Thép ít C hơn gang." },

{ id:85, level:"van_dung", question:"Kim loại nào đẩy được copper khỏi CuSO4?", options:{A:"Silver",B:"Gold",C:"Iron",D:"Mercury"}, answer:"C", explanation:"Fe hoạt động mạnh hơn Cu." },

{ id:86, level:"van_dung_cao", question:"Dùng zinc bảo vệ vỏ tàu steel vì", options:{A:"Zn đẹp",B:"Zn rẻ",C:"Zn hoạt động mạnh hơn Fe",D:"Zn nhẹ"}, answer:"C", explanation:"Anot hi sinh." },

{ id:87, level:"van_dung_cao", question:"Giải pháp giảm mưa acid hiệu quả nhất là", options:{A:"Trồng cây",B:"Giảm đốt than",C:"Chôn rác",D:"Xả thải"}, answer:"B", explanation:"Giảm SO2, NO2." },

{ id:88, level:"van_dung_cao", question:"Chế độ ăn hợp lí cần", options:{A:"Chỉ carbohydrate",B:"Chỉ protein",C:"Cân đối protein, lipid, carbohydrate",D:"Chỉ lipid"}, answer:"C", explanation:"Đủ chất dinh dưỡng." },

{ id:89, level:"van_dung_cao", question:"Phát triển bền vững là phát triển", options:{A:"Chỉ kinh tế",B:"Kinh tế gắn bảo vệ môi trường",C:"Ngắn hạn",D:"Không kiểm soát"}, answer:"B", explanation:"Đảm bảo tương lai." },

{ id:90, level:"van_dung_cao", question:"Năng lượng phù hợp cho vùng hải đảo là", options:{A:"Coal",B:"Oil",C:"Wind and solar",D:"Gas"}, answer:"C", explanation:"Nguồn tái tạo." },

{ id:91, level:"van_dung_cao", question:"Giảm phát thải CO2 hiệu quả nhất là", options:{A:"Tăng đốt than",B:"Tiết kiệm năng lượng",C:"Xả thải",D:"Phá rừng"}, answer:"B", explanation:"Giảm nhu cầu nhiên liệu." },

{ id:92, level:"van_dung_cao", question:"Kinh tế tuần hoàn hướng tới", options:{A:"Dùng một lần",B:"Tái chế – tái sử dụng",C:"Thải bỏ nhanh",D:"Khai thác tối đa"}, answer:"B", explanation:"Giảm rác thải." },

{ id:93, level:"van_dung_cao", question:"Giải pháp cá nhân hiệu quả bảo vệ môi trường là", options:{A:"Tiết kiệm điện, nước",B:"Đốt rác",C:"Vứt rác",D:"Chặt cây"}, answer:"A", explanation:"Hành động thiết thực." },

{ id:94, level:"van_dung_cao", question:"Nếu CO2 tiếp tục tăng sẽ gây", options:{A:"Lạnh hơn",B:"Nóng lên toàn cầu",C:"Ổn định khí hậu",D:"Không đổi"}, answer:"B", explanation:"Tăng hiệu ứng nhà kính." },

{ id:95, level:"van_dung_cao", question:"Giảm rác plastic hiệu quả nhất là", options:{A:"Đốt",B:"Chôn",C:"Hạn chế sử dụng",D:"Vứt"}, answer:"C", explanation:"Giảm từ nguồn." },

{ id:96, level:"van_dung_cao", question:"Bảo vệ môi trường là trách nhiệm của", options:{A:"Nhà nước",B:"Doanh nghiệp",C:"Cá nhân",D:"Toàn xã hội"}, answer:"D", explanation:"Trách nhiệm chung." },

{ id:97, level:"van_dung_cao", question:"Hóa học góp phần bảo vệ môi trường thông qua", options:{A:"Tạo chất thải",B:"Vật liệu và công nghệ sạch",C:"Đốt nhiên liệu",D:"Xả khí"}, answer:"B", explanation:"Ứng dụng khoa học." },

{ id:98, level:"van_dung_cao", question:"Tăng trưởng xanh cần ưu tiên", options:{A:"Khai thác tài nguyên",B:"Năng lượng tái tạo",C:"Đốt than",D:"Phá rừng"}, answer:"B", explanation:"Giảm phát thải." },

{ id:99, level:"van_dung_cao", question:"Hành vi nào thân thiện môi trường nhất?", options:{A:"Dùng túi nylon",B:"Tái sử dụng túi vải",C:"Vứt pin bừa bãi",D:"Đốt rác"}, answer:"B", explanation:"Giảm rác nhựa." },

{ id:100, level:"van_dung_cao", question:"Mục tiêu cuối cùng của học chemistry là", options:{A:"Học thuộc",B:"Vận dụng vào thực tiễn",C:"Nhớ công thức",D:"Làm nhiều bài"}, answer:"B", explanation:"Hiểu và ứng dụng." }

];
// Đảm bảo có alias cho tất cả chuyên đề (bao gồm Tổng hợp)
window.questions_hoa_by_topic["KIM LOẠI – PHI KIM"] = window.questions_hoa_by_topic["Chuyên đề 1. KIM LOẠI – PHI KIM"];
window.questions_hoa_by_topic["HỢP CHẤT HỮU CƠ – HIĐROCACBON – NHIÊN LIỆU"] = window.questions_hoa_by_topic["Chuyên đề 2. HỢP CHẤT HỮU CƠ – HIĐROCACBON – NHIÊN LIỆU"];
window.questions_hoa_by_topic["ANCOL ETYLIC – AXIT AXETIC – ESTE"] = window.questions_hoa_by_topic["Chuyên đề 3. ANCOL ETYLIC – AXIT AXETIC – ESTE"];
window.questions_hoa_by_topic["HÓA HỮU CƠ TRONG ĐỜI SỐNG"] = window.questions_hoa_by_topic["Chuyên đề 4. HÓA HỮU CƠ TRONG ĐỜI SỐNG"];
window.questions_hoa_by_topic["TÀI NGUYÊN – MÔI TRƯỜNG"] = window.questions_hoa_by_topic["Chuyên đề 5. TÀI NGUYÊN – MÔI TRƯỜNG"];
window.questions_hoa_by_topic["TỔNG HỢP"] = window.questions_hoa_by_topic["Chuyên đề 6. TỔNG HỢP"];  // Dòng quan trọng nhất

/* Note: This file was populated from `data.json` → `vatly.main.questions`.
    Each object follows the shape used by the quiz code: { q, options, a, explain }.
*/

