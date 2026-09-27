const activity = (title, kind, when, time, en, vi, steps, extra) => ({ title, kind, when, time, en, vi, steps, extra });

const stages = [
  {
    label: "0–6 tháng", title: "Bắt đầu bằng giọng nói và ánh mắt.",
    description: "Bé chưa cần nói từ nào. Hãy để con nghe hai ngôn ngữ trong những phút được ôm, chăm sóc và đáp lời.",
    rhythmNote: "Những lượt rất ngắn, khi bé tỉnh táo và thoải mái.",
    rhythm: [["☀", "Khi thức dậy", "Chào bé bằng một câu quen thuộc."], ["✦", "Khi thay tã", "Nói tên việc đang làm, nhìn và chờ bé đáp."], ["☾", "Trước giấc ngủ", "Hát một bài ngắn hoặc xem một trang sách."]],
    focus: "Gắn âm thanh với sự an toàn và gần gũi: nhìn mặt, đáp lại tiếng ê a, cho con thời gian phản hồi. Không đặt mục tiêu học từ vựng.",
    signals: ["Quay nhìn khuôn mặt, giọng nói quen thuộc.", "Ê a hoặc tạo âm thanh khác nhau khi tương tác.", "Cười, cử động hoặc dịu lại khi được trò chuyện."],
    parents: ["Nói chậm, giọng tự nhiên; không cần phát âm hoàn hảo.", "Bắt chước một âm bé tạo ra rồi chờ lượt của con.", "Khi bé mệt hoặc quay đi, dừng và để bé nghỉ."],
    activities: [
      activity("Chào buổi sáng", "Lúc thức dậy", "Khi bé vừa tỉnh và đang nhìn bố mẹ", "1–2 phút", "Good morning, baby!", "Chào buổi sáng, con yêu!", ["Đến gần để bé thấy rõ khuôn mặt.", "Nói câu chào bằng tiếng Anh, mỉm cười và chờ một chút.", "Tiếp tục trò chuyện bằng tiếng Việt theo cách bạn vẫn làm."], "Nếu bé nhìn sang hướng khác, chỉ cần ôm con. Lần sau thử lại."),
      activity("Kể chuyện thay tã", "Chăm sóc bé", "Trong lúc thay tã", "2–3 phút", "Clean diaper. All done!", "Tã sạch rồi. Xong rồi con!", ["Nói tên một việc đang làm trước khi làm.", "Dừng một nhịp để bé nghe và nhìn bạn.", "Lặp lại đúng câu ấy ở vài lần thay tã khác."], "Sự lặp lại khiến câu nói gắn với trải nghiệm thật."),
      activity("Bắt chước tiếng bé", "Đáp lời", "Khi bé ê a, phát âm hoặc cười", "1–2 phút", "Oh! I hear you.", "Ồ, mẹ nghe con rồi.", ["Nhìn bé và bắt chước nhẹ một âm bé vừa tạo.", "Chờ bé phát âm hoặc cử động đáp lại.", "Trả lời bằng một câu ngắn, không yêu cầu bé nói đúng."], "Đây là cuộc trò chuyện đầu tiên, dù chưa có từ nào."),
      activity("Một bức hình thôi", "Sách tranh", "Lúc bé tỉnh táo, đang được bế", "2–4 phút", "Look, a cat!", "Con mèo kìa!", ["Chọn trang có một hình lớn, rõ.", "Chỉ vào hình và gọi tên bằng một câu ngắn.", "Chờ bé nhìn; lật trang khi bé còn hứng thú."], "Không cần đọc hết sách. Một trang cũng đủ cho hôm nay."),
      activity("Hát trong vòng tay", "Giai điệu", "Khi bế hoặc ru bé", "1–3 phút", "Twinkle, twinkle, little star.", "Một ngôi sao nhỏ đang sáng kìa.", ["Chọn một đoạn hát ngắn bạn nhớ rõ.", "Hát trực tiếp, nhìn bé và đung đưa nhẹ.", "Lặp lại cùng bài vào những ngày khác."], "Giọng bố mẹ quen thuộc hấp dẫn hơn một bản thu mở sẵn."),
      activity("Tay bé, chân bé", "Cơ thể", "Sau tắm hoặc khi mặc đồ", "1–2 phút", "Here are your little hands.", "Đôi tay nhỏ xíu của con đây.", ["Chạm nhẹ vào bàn tay hoặc bàn chân bé.", "Gọi tên bộ phận bằng câu ngắn.", "Quan sát bé, rồi đáp lại ánh nhìn hoặc âm thanh của con."], "Không cần kiểm tra bé đã nhớ tên chưa."),
      activity("Tạm biệt rồi gặp lại", "Nếp quen", "Khi rời phòng rồi quay lại", "1 phút", "I'm back! Hello again!", "Bố quay lại rồi đây!", ["Thông báo nhẹ trước khi rời bé trong sự chăm sóc an toàn.", "Khi quay lại, nhìn bé và dùng cùng một câu chào.", "Mỉm cười, chờ bé phản ứng."], "Chỉ dùng khi phù hợp với nếp chăm sóc của gia đình."),
    ]
  },
  {
    label: "6–12 tháng", title: "Cùng nhìn, cùng chỉ, cùng reo lên.",
    description: "Bé ngày càng thích âm thanh, cử chỉ và trò lặp lại. Tiếng Anh có thể đi cùng sách, đồ chơi và những lần ú òa.",
    rhythmNote: "Một trò ngắn rồi lặp lại khi con còn thích.",
    rhythm: [["☀", "Lúc chơi", "Gọi tên món đồ bé đang nhìn."], ["✦", "Khi ăn", "Nói một câu về món ăn hay hành động."], ["☾", "Trước ngủ", "Xem sách tranh và chờ bé chỉ." ]],
    focus: "Theo sự chú ý của bé. Nói về thứ con đang nhìn hoặc cầm, dùng cử chỉ, rồi chờ bé bập bẹ, nhìn hoặc chỉ đáp lại.",
    signals: ["Bập bẹ nhiều âm, thích trò qua lại.", "Quay lại khi nghe tên hoặc giọng quen.", "Nhìn, chỉ, vẫy hoặc dùng cử chỉ để giao tiếp."],
    parents: ["Dùng lời ngắn, cử chỉ rõ và vật thật.", "Đáp lại cả cử chỉ lẫn âm thanh của bé.", "Cùng xem một trang sách thay vì cố đọc hết cuốn."],
    activities: [
      activity("Ú òa hai thứ tiếng", "Trò chơi", "Lúc bé đang vui và tỉnh", "2–3 phút", "Peekaboo! Here I am!", "Ú òa! Bố đây!", ["Che mặt bạn bằng hai bàn tay rồi mở ra.", "Nói câu tiếng Anh cùng lúc xuất hiện.", "Chờ bé cười, nhìn hoặc làm lại động tác."], "Không che mặt bé hoặc dùng vải trùm lên con."),
      activity("Quả bóng lăn", "Vận động", "Khi ngồi chơi cùng bé trên sàn", "3–5 phút", "The ball is rolling!", "Bóng lăn rồi kìa!", ["Lăn quả bóng mềm ở khoảng cách an toàn.", "Nói câu ngắn đúng lúc bóng chuyển động.", "Chờ bé nhìn, chạm hoặc đẩy bóng lại."], "Dùng đồ chơi đủ lớn, phù hợp độ tuổi; luôn quan sát bé."),
      activity("Chỉ một con vật", "Sách tranh", "Lúc đọc sách cùng bé", "2–4 phút", "Where is the dog? There!", "Chó đâu rồi? Đây rồi!", ["Mở trang có hình con vật lớn.", "Chỉ và hỏi ngắn, rồi tự trả lời bằng cử chỉ.", "Nếu bé chỉ hoặc chạm, gọi lại tên con vật."], "Mục tiêu là cùng chú ý, không phải bé phải trả lời đúng."),
      activity("Tạm biệt bằng tay", "Cử chỉ", "Khi người thân ra về", "1–2 phút", "Bye-bye! See you!", "Tạm biệt nhé!", ["Vẫy tay và nói một câu ngắn.", "Để bé nhìn người thân vẫy lại.", "Lặp lại tự nhiên khi tình huống ấy xuất hiện."], "Nếu bé chưa vẫy theo, bạn vẫn có thể làm mẫu."),
      activity("Thìa và bữa ăn", "Sinh hoạt", "Khi chuẩn bị ăn", "2–3 phút", "Here is your spoon.", "Thìa của con đây.", ["Cho bé nhìn đồ vật bạn đang cầm.", "Nói tên đồ vật bằng một câu thật ngắn.", "Dừng để bé nhìn hoặc với tay theo khả năng."], "Chọn vật an toàn và theo sát bé khi ăn."),
      activity("Nghe rồi tìm", "Âm thanh", "Trong phòng yên tĩnh", "2–3 phút", "Where is the bell?", "Chuông ở đâu nhỉ?", ["Tạo âm thanh nhẹ bằng vật an toàn ngoài tầm miệng bé.", "Hỏi ngắn và nhìn theo hướng âm thanh.", "Khi bé quay đầu, chỉ vật và gọi tên."], "Giữ âm lượng dịu, không làm bé giật mình."),
      activity("Nhìn ra cửa sổ", "Khám phá", "Khi bế bé nhìn ra ngoài", "2–4 phút", "Look, a tree!", "Nhìn cây kìa con!", ["Theo mắt bé đang nhìn ra ngoài.", "Chọn một thứ rõ nhất và gọi tên.", "Chờ phản ứng rồi nói thêm một câu tiếng Việt tự nhiên."], "Ít từ nhưng đúng lúc thường dễ theo hơn nói liên tục."),
    ]
  },
  {
    label: "12–24 tháng", title: "Từ đầu tiên sống trong trò chơi.",
    description: "Gọi tên đồ vật, hành động và cảm xúc đang xảy ra. Khi bé nói một từ ở bất kỳ ngôn ngữ nào, hãy mở rộng thành một câu nhỏ.",
    rhythmNote: "Cho bé nhiều lượt chọn, chỉ, nói và được đáp lại.",
    rhythm: [["☀", "Lúc mặc đồ", "Gọi tên áo, quần, giày trong lúc làm."], ["✦", "Khi ăn hoặc chơi", "Cho bé chọn giữa hai vật quen."], ["☾", "Trước ngủ", "Nhìn sách, kể bằng chính từ của bạn."]],
    focus: "Nối một từ với vật hoặc việc thật, rồi mở rộng lời bé nói. Đếm cả từ tiếng Việt và tiếng Anh khi nhìn sự tiến bộ của con.",
    signals: ["Dùng cử chỉ và từ để đòi, gọi hoặc chia sẻ.", "Hiểu thêm nhiều từ trong sinh hoạt quen thuộc.", "Dần ghép ý ngắn khi tiến gần 2 tuổi; tốc độ mỗi bé khác nhau."],
    parents: ["Nếu bé nói “ball”, đáp “Yes, a big ball!”.", "Cho bé lựa chọn nhưng không ép trả lời thành tiếng.", "Đọc lại sách bé thích, dù đã đọc rất nhiều lần."],
    activities: [
      activity("Chọn áo nào?", "Sinh hoạt", "Khi mặc đồ", "3–5 phút", "Blue shirt or red shirt?", "Áo xanh hay áo đỏ nhỉ?", ["Cầm hai chiếc áo trong tầm nhìn của bé.", "Nói lựa chọn ngắn và chờ bé nhìn, chỉ hoặc nói.", "Đáp lại lựa chọn của con bằng một câu đầy đủ."], "Nếu bé chỉ, bạn có thể nói: “Blue shirt. Con chọn áo xanh!”."),
      activity("Tháp cao, tháp đổ", "Đồ chơi", "Khi xếp cốc hoặc khối lớn", "4–6 phút", "Up, up... down!", "Cao lên... đổ rồi!", ["Xếp hai hoặc ba khối cùng bé.", "Nói từ chỉ hành động đúng lúc tay đang làm.", "Chờ bé thử lại và thêm câu nhận xét."], "Không cần hỏi liên tục “Đây là gì?”."),
      activity("Đi tìm đôi giày", "Tìm đồ", "Trước lúc ra ngoài", "3–5 phút", "Where are your shoes?", "Giày của con đâu rồi?", ["Để giày ở chỗ bé dễ thấy.", "Hỏi rồi cùng nhìn quanh, không biến thành bài kiểm tra.", "Khi tìm được, gọi tên và vui cùng con."], "Có thể thay bằng mũ, tất hoặc món đồ quen khác."),
      activity("Bé nói một, mình thêm một", "Đáp lời", "Khi bé gọi tên bất kỳ thứ gì", "1–2 phút", "Ball! Yes, a big ball.", "Bóng! Đúng rồi, bóng to quá.", ["Nghe ý bé muốn nói.", "Lặp lại từ bé dùng và thêm một ý nhỏ.", "Chờ bé đáp hoặc tiếp tục chơi."], "Không yêu cầu bé nhắc lại câu dài."),
      activity("Con vật trong sách", "Đọc sách", "Khi xem sách tranh", "4–6 phút", "The cat is sleeping.", "Mèo đang ngủ kìa.", ["Để bé tự chọn trang hoặc chỉ hình.", "Nói một câu về hành động trong hình.", "Nếu bé phát âm, đáp lại và thêm một ý."], "Một từ ở tiếng nào cũng là cơ hội trò chuyện."),
      activity("Bữa ăn nhiều màu", "Ăn cùng nhau", "Khi có thực phẩm phù hợp với bé", "2–4 phút", "This banana is yellow.", "Quả chuối màu vàng.", ["Chỉ món bé đang ăn hoặc nhìn.", "Gọi tên và nói thêm màu, mùi hoặc vị.", "Chờ bé chỉ, nhìn hoặc nói theo cách của con."], "Theo quy tắc ăn uống an toàn phù hợp độ tuổi của bé."),
      activity("Bóng đi đâu?", "Vận động", "Khi chơi trên sàn", "4–6 phút", "The ball is under the chair.", "Bóng ở dưới ghế rồi.", ["Lăn quả bóng vào vị trí dễ thấy.", "Cùng tìm và nói vị trí đơn giản.", "Để bé cầm bóng rồi đổi lượt."], "Chỉ dùng vị trí an toàn, không để bé chui vào chỗ kẹt."),
    ]
  },
  {
    label: "2–3 tuổi", title: "Nói qua lại trong thế giới giả vờ.",
    description: "Bé muốn tự chọn, đặt câu hỏi và nhập vai. Chơi cửa hàng, nấu ăn hay khám phá quanh nhà đều có thể thành cuộc trò chuyện Việt–Anh.",
    rhythmNote: "Cho con lượt nói và quyền dẫn dắt trò chơi.",
    rhythm: [["☀", "Lúc chuẩn bị", "Hỏi con muốn chọn món nào."], ["✦", "Khi chơi", "Đóng vai và nói theo nhân vật."], ["☾", "Cuối ngày", "Nhắc một điều con thích hôm nay."]],
    focus: "Tăng số lượt qua lại: nghe, đáp, hỏi tiếp. Cho bé dùng tiếng con có sẵn rồi mẫu hóa câu tiếng Anh đơn giản.",
    signals: ["Kết hợp từ và ý ngày càng nhiều hơn.", "Chơi giả vờ, gọi tên người và hành động.", "Gần 3 tuổi, có thể trao đổi qua lại vài lượt về chuyện quen."],
    parents: ["Hỏi câu mở ngắn rồi chờ đủ lâu cho bé nghĩ.", "Mở rộng câu bé nói thay vì sửa lỗi liên tục.", "Chơi theo ý con, không cần kịch bản cố định."],
    activities: [
      activity("Cửa hàng nhỏ", "Đóng vai", "Khi chơi với đồ an toàn", "5–8 phút", "I'd like an apple, please.", "Cho mẹ một quả táo nhé.", ["Bày vài món đồ quen và để bé làm người bán.", "Nói một câu mua hàng ngắn bằng tiếng Anh.", "Chờ bé đưa đồ, rồi cảm ơn và đổi vai."], "Quả táo có thể là đồ chơi; không cần mua thêm đạo cụ."),
      activity("Đầu bếp hôm nay", "Đóng vai", "Khi chơi nấu ăn", "5–8 phút", "Let's make soup!", "Mình nấu súp nhé!", ["Dùng bát, thìa hoặc đồ chơi an toàn.", "Nói một hành động: stir, pour hoặc eat.", "Hỏi bé món ăn có gì và nghe câu trả lời."], "Dùng câu bạn tự tin; tiếng Việt vẫn có chỗ trong trò chơi."),
      activity("Hai điều đã xảy ra", "Kể chuyện", "Cuối ngày", "3–5 phút", "We went outside. We saw a dog.", "Mình đã ra ngoài và thấy một chú chó.", ["Nhắc lại một việc thật vừa xảy ra.", "Hỏi bé nhớ điều gì hoặc thích phần nào.", "Nối lời bé thành một câu ngắn hơn hoặc dài hơn tùy khả năng."], "Nếu bé chỉ trả lời một từ, đó vẫn là một lượt trò chuyện."),
      activity("Ai đang ở đâu?", "Khám phá", "Khi xem tranh hoặc nhìn quanh nhà", "4–6 phút", "The teddy is on the bed.", "Gấu bông ở trên giường.", ["Chọn một món đồ hoặc hình con vật.", "Đặt nó lên, dưới hoặc cạnh vật khác.", "Nói vị trí và mời bé đặt lại theo ý mình."], "Tập trung vào chơi, không cần kiểm tra bé thuộc giới từ."),
      activity("Cảm xúc của gấu", "Cảm xúc", "Khi chơi thú bông", "4–6 phút", "Bear is happy. What happened?", "Gấu vui quá. Có chuyện gì vậy?", ["Cho thú bông làm một hành động vui hoặc buồn.", "Nói cảm xúc bằng câu ngắn.", "Để bé kể theo cách của con rồi phản hồi."], "Không ép con gắn nhãn cảm xúc của chính mình."),
      activity("Chọn đường đi", "Ngoài trời", "Khi đi dạo an toàn", "4–6 phút", "Left or right? Let's go!", "Rẽ trái hay rẽ phải nhỉ?", ["Cho bé chọn giữa hai hướng phù hợp.", "Gọi tên hướng đã chọn khi cùng di chuyển.", "Nhận xét một vật hai người cùng nhìn thấy."], "Người lớn vẫn quyết định lộ trình an toàn."),
      activity("Con kể tiếp đi", "Sách tranh", "Khi đọc sách", "5–8 phút", "What happens next?", "Rồi chuyện gì xảy ra nữa?", ["Dừng ở một trang có tình huống rõ.", "Hỏi điều gì sẽ xảy ra rồi chờ bé đoán.", "Đón nhận ý tưởng của bé và đọc tiếp."], "Không cần đoán đúng nội dung sách."),
    ]
  },
  {
    label: "3–6 tuổi", title: "Kể chuyện, hỏi vì sao, sáng tạo cùng nhau.",
    description: "Ở tuổi mẫu giáo, bé có thể dùng hai tiếng để kể, chơi vai và hỏi nhiều hơn. Hãy tạo những cuộc trò chuyện có thật thay vì giờ học dài.",
    rhythmNote: "Ưu tiên chất lượng cuộc nói chuyện hơn số từ mới.",
    rhythm: [["☀", "Trước ngày mới", "Nói một kế hoạch đơn giản."], ["✦", "Khi chơi", "Chơi vai, giải thích và đổi ý."], ["☾", "Trước ngủ", "Kể lại một sự việc hoặc đọc cùng nhau."]],
    focus: "Khuyến khích kể chuyện có người, nơi chốn và việc xảy ra; đặt câu hỏi thật, dự đoán, so sánh và chơi với từ ngữ.",
    signals: ["Kể lại một việc đã trải qua bằng nhiều ý hơn.", "Hỏi, giải thích hoặc thương lượng khi chơi.", "Dần nối nhiều lượt đối thoại; tuổi lớn hơn có thể kể chuyện có chuỗi sự kiện."],
    parents: ["Hỏi “Con nghĩ sao?” rồi lắng nghe câu trả lời.", "Chọn sách và chủ đề bé thật sự quan tâm.", "Cho bé chuyển giữa hai ngôn ngữ khi cần diễn đạt ý."],
    activities: [
      activity("Ba tấm hình, một câu chuyện", "Sáng tạo", "Khi xem tranh hoặc ảnh gia đình", "8–10 phút", "First... then... at the end...", "Đầu tiên... rồi... cuối cùng...", ["Chọn ba hình có thể xếp thành một câu chuyện.", "Để bé chọn thứ tự và kể bằng ngôn ngữ bé muốn.", "Bạn thêm vài từ tiếng Anh nối ý rồi nghe bé kể lại."], "Không cần sửa để câu chuyện giống ý người lớn."),
      activity("Bác sĩ thú bông", "Đóng vai", "Khi chơi với thú bông", "8–10 phút", "How does the bear feel?", "Bạn gấu thấy thế nào?", ["Cho bé chọn vai bác sĩ hoặc người nhà.", "Hỏi một câu về tình trạng của thú bông.", "Đổi vai và cùng nghĩ cách chăm sóc."], "Dùng trò giả vờ để trò chuyện, không cần kiến thức y khoa."),
      activity("Dự đoán trang tiếp theo", "Đọc sách", "Khi đọc truyện cùng nhau", "6–10 phút", "What do you think will happen?", "Con đoán chuyện gì sẽ xảy ra?", ["Dừng ở một chỗ thú vị trong truyện.", "Mời bé đoán và nói vì sao.", "Đọc tiếp rồi so sánh với điều hai người đã đoán."], "Mọi dự đoán đều là cơ hội để nói."),
      activity("Phóng viên gia đình", "Trò chuyện", "Sau một hoạt động trong ngày", "5–8 phút", "What was your favorite part?", "Con thích đoạn nào nhất?", ["Để bé chọn một việc vừa trải qua.", "Hỏi ai, ở đâu, điều gì vui hoặc khó.", "Kể lại câu chuyện ấy cho một người thân nghe."], "Bố mẹ cũng kể một phần trong ngày của mình."),
      activity("Săn màu quanh nhà", "Khám phá", "Khi dọn đồ hoặc đi dạo", "6–8 phút", "Can you find something blue?", "Con tìm thứ gì màu xanh được không?", ["Chọn một màu hoặc nhóm đồ vật quen.", "Cùng tìm, gọi tên và so sánh các món.", "Để bé tự đặt thử thách tiếp theo cho bố mẹ."], "Có thể đổi màu thành hình dạng, kích thước hoặc chất liệu."),
      activity("Xây một thành phố", "Chơi mở", "Khi xếp khối hoặc hộp giấy", "8–12 phút", "Where should the bridge go?", "Mình đặt cây cầu ở đâu?", ["Cùng xếp vài khối thành đường và nhà.", "Để bé quyết định điều gì xảy ra trong thành phố.", "Hỏi về vị trí, lý do và bước tiếp theo."], "Đạo cụ đơn giản là đủ; ý tưởng của bé mới là phần chính."),
      activity("Đổi kết truyện", "Kể chuyện", "Sau một cuốn truyện quen", "6–10 phút", "What if the rabbit goes home?", "Nếu bạn thỏ về nhà thì sao?", ["Nhắc lại một nhân vật bé thích.", "Mời bé nghĩ một kết thúc khác.", "Nghe, hỏi thêm và cùng diễn thử một đoạn."], "Có thể kể bằng tiếng Việt rồi thử thêm vài câu tiếng Anh."),
    ]
  }
];

const dayThemes = [
  ["Khởi động thật nhẹ", "Một việc quen thuộc là đủ để bắt đầu."],
  ["Chơi và chờ đáp lại", "Nhớ cho bé có lượt nhìn, chỉ hoặc nói."],
  ["Mở một trang sách", "Đi theo điều bé đang quan tâm."],
  ["Lặp lại điều con thích", "Cùng một trò có thể thú vị nhiều lần."],
  ["Nói trong lúc chăm sóc", "Dùng lời gắn với việc đang diễn ra."],
  ["Khám phá quanh nhà", "Vật quen thuộc là học liệu rất tốt."],
  ["Chơi rồi kể lại", "Khép tuần bằng một khoảnh khắc vui."],
];

const $ = (id) => document.getElementById(id);
const weekdayNames = ["Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy", "Chủ nhật"];
const weekdayShort = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
const today = new Date();
const todayIndex = (today.getDay() + 6) % 7;
const weekMonday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - todayIndex);
const weekKey = `${weekMonday.getFullYear()}-${String(weekMonday.getMonth() + 1).padStart(2, "0")}-${String(weekMonday.getDate()).padStart(2, "0")}`;
const storageName = "hai-tieng-mot-tuoi-tho-v1";
let stored = {};
try { stored = JSON.parse(localStorage.getItem(storageName) || "{}"); } catch (_) { stored = {}; }
let done = stored.week === weekKey && stored.done && typeof stored.done === "object" ? stored.done : {};
let selectedDay = todayIndex;
let selectedStage = 0;

function save() {
  try { localStorage.setItem(storageName, JSON.stringify({ birthday: $("birthday").value, week: weekKey, done })); } catch (_) { /* The app still works without storage. */ }
}

function ageInMonths(value) {
  const birth = new Date(`${value}T12:00:00`);
  if (Number.isNaN(birth.getTime()) || birth > today) return null;
  let months = (today.getFullYear() - birth.getFullYear()) * 12 + today.getMonth() - birth.getMonth();
  if (today.getDate() < birth.getDate()) months -= 1;
  return Math.max(months, 0);
}

function stageFromMonths(months) {
  if (months < 6) return 0;
  if (months < 12) return 1;
  if (months < 24) return 2;
  if (months < 36) return 3;
  return 4;
}

function updateAgeMessage() {
  const value = $("birthday").value;
  const message = $("age-message");
  if (!value) { message.textContent = ""; return; }
  const months = ageInMonths(value);
  if (months === null) { message.textContent = "Vui lòng chọn ngày sinh hợp lệ."; return; }
  if (months >= 72) { message.textContent = "Lộ trình hiện có đến khoảng 6 tuổi."; return; }
  const ageText = months < 12 ? `${months} tháng` : `${Math.floor(months / 12)} tuổi${months % 12 ? ` ${months % 12} tháng` : ""}`;
  message.textContent = `Bé được khoảng ${ageText}.`;
}

function renderStageNav() {
  $("stage-nav").innerHTML = stages.map((stage, index) => `<button class="stage-button" type="button" data-stage="${index}" aria-pressed="${index === selectedStage}"><span>${stage.label}</span><span class="stage-arrow" aria-hidden="true">↗</span></button>`).join("");
}

function renderRhythm(stage) {
  $("rhythm-note").textContent = stage.rhythmNote;
  $("rhythm-grid").innerHTML = stage.rhythm.map(([icon, name, description]) => `<article class="rhythm-item"><span class="rhythm-icon" aria-hidden="true">${icon}</span><div><strong>${name}</strong><p>${description}</p></div></article>`).join("");
}

function renderGrowth(stage) {
  $("growth-focus").textContent = stage.focus;
  $("growth-signals").innerHTML = stage.signals.map(item => `<li>${item}</li>`).join("");
  $("growth-parents").innerHTML = stage.parents.map(item => `<li>${item}</li>`).join("");
}

function renderWeekTabs() {
  $("week-tabs").innerHTML = weekdayNames.map((name, index) => `<button class="week-button" type="button" data-day="${index}" aria-pressed="${index === selectedDay}" aria-label="${name}, ngày ${index + 1} trong lịch gợi ý"><span>${index === todayIndex ? "Hôm nay" : weekdayShort[index]}</span><strong>${index + 1}</strong></button>`).join("");
}

function currentActivityIds() { return [selectedDay, (selectedDay + 3) % 7]; }
function doneKey(activityId) { return `${selectedStage}:${selectedDay}:${activityId}`; }

function activityMarkup(item, id, order) {
  const tried = Boolean(done[doneKey(id)]);
  return `<article class="activity-card"><div class="activity-header"><span class="activity-type">${order === 0 ? "THỬ ĐẦU TIÊN" : "NẾU CÒN HỨNG THÚ"}</span><span class="activity-duration">◷ ${item.time}</span></div><h4>${item.title}</h4><p class="activity-context">${item.when}</p><div class="phrase-box"><span>CÂU NÓI MẪU</span><strong lang="en">“${item.en}”</strong><em>Tiếng Việt: “${item.vi}”</em></div><details><summary>Ba bước làm cùng con</summary><ol>${item.steps.map(step => `<li>${step}</li>`).join("")}</ol><p class="activity-extra">${item.extra}</p></details><button class="done-button" type="button" data-activity="${id}" aria-pressed="${tried}"><span class="check-circle" aria-hidden="true">${tried ? "✓" : ""}</span>${tried ? "Đã thử" : "Đánh dấu đã thử"}</button></article>`;
}

function updateProgress() {
  const count = currentActivityIds().filter(id => done[doneKey(id)]).length;
  $("progress-text").textContent = `${count}/2 đã thử`;
  $("progress-fill").style.width = `${count * 50}%`;
  $("progress-bar").setAttribute("aria-valuenow", String(count));
}

function renderDay() {
  renderWeekTabs();
  $("day-badge").textContent = selectedDay === todayIndex ? `HÔM NAY · ${weekdayNames[selectedDay].toUpperCase()}` : `NGÀY ${selectedDay + 1} · ${weekdayNames[selectedDay].toUpperCase()}`;
  $("day-title").textContent = dayThemes[selectedDay][0];
  $("day-description").textContent = dayThemes[selectedDay][1];
  const ids = currentActivityIds();
  $("activities").innerHTML = ids.map((id, order) => activityMarkup(stages[selectedStage].activities[id], id, order)).join("");
  updateProgress();
}

function render() {
  const stage = stages[selectedStage];
  renderStageNav();
  $("stage-pill").textContent = stage.label;
  $("stage-title").textContent = stage.title;
  $("stage-description").textContent = stage.description;
  renderRhythm(stage);
  renderGrowth(stage);
  renderDay();
  updateAgeMessage();
}

$("birthday").max = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
if (stored.birthday && ageInMonths(stored.birthday) !== null) {
  $("birthday").value = stored.birthday;
  const months = ageInMonths(stored.birthday);
  if (months < 72) selectedStage = stageFromMonths(months);
}

$("birthday").addEventListener("change", () => {
  const months = ageInMonths($("birthday").value);
  if (months !== null && months < 72) selectedStage = stageFromMonths(months);
  save();
  render();
});

$("stage-nav").addEventListener("click", (event) => {
  const button = event.target.closest("[data-stage]");
  if (!button) return;
  selectedStage = Number(button.dataset.stage);
  render();
});

$("week-tabs").addEventListener("click", (event) => {
  const button = event.target.closest("[data-day]");
  if (!button) return;
  selectedDay = Number(button.dataset.day);
  renderDay();
});

$("activities").addEventListener("click", (event) => {
  const button = event.target.closest("[data-activity]");
  if (!button) return;
  const key = doneKey(Number(button.dataset.activity));
  if (done[key]) delete done[key]; else done[key] = true;
  save();
  const tried = Boolean(done[key]);
  button.setAttribute("aria-pressed", String(tried));
  button.innerHTML = `<span class="check-circle" aria-hidden="true">${tried ? "✓" : ""}</span>${tried ? "Đã thử" : "Đánh dấu đã thử"}`;
  updateProgress();
});

render();
