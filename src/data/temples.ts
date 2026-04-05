import type { Temple } from "../types";

export const TEMPLES_DATA: Temple[] = [
  {
    "id": "1",
    "name": "Kashi Vishwanath Temple",
    "location": {
      "state": "Uttar Pradesh",
      "city": "Varanasi"
    },
    "deity": "Lord Shiva",
    "history": "One of the most famous Hindu temples dedicated to Lord Shiva. It is located in Varanasi, Uttar Pradesh, India. The temple stands on the western bank of the holy river Ganga, and is one of the twelve Jyotirlingas, the holiest of Shiva temples.",
    "timings": "3:00 AM - 11:00 PM",
    "rituals": [
      "Mangala Aarti: 3:00 AM",
      "Bhog Aarti: 11:15 AM",
      "Sapt Rishi Aarti: 7:00 PM",
      "Shringar Aarti: 9:00 PM",
      "Shayan Aarti: 10:30 PM"
    ],
    "festivals": [
      "Mahashivratri",
      "Dev Deepawali",
      "Shravan Month"
    ],
    "dressCode": "Traditional attire preferred. Men: Dhoti/Kurta-Pyjama. Women: Saree/Salwar Kameez.",
    "nearby": {
      "accommodation": "Numerous hotels and dharamshalas in Varanasi.",
      "transport": "Well connected by Varanasi Junction Railway Station and Lal Bahadur Shastri International Airport."
    },
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Kashi_Vishwanath.jpg"
  },
  {
    "id": "2",
    "name": "Meenakshi Amman Temple",
    "location": {
      "state": "Tamil Nadu",
      "city": "Madurai"
    },
    "deity": "Goddess Meenakshi (Parvati) and Lord Sundareswarar (Shiva)",
    "history": "A historic Hindu temple located on the southern bank of the Vaigai River in the temple city of Madurai, Tamil Nadu, India. It is dedicated to Meenakshi, a form of Parvati, and her consort, Sundareswarar, a form of Shiva.",
    "timings": "5:00 AM - 12:30 PM, 4:00 PM - 10:00 PM",
    "rituals": [
      "Thiruvananthal Pooja: 5:00 AM",
      "Vizha Pooja: 6:30 AM",
      "Uchikala Pooja: 11:30 AM",
      "Ardhajama Pooja: 9:00 PM"
    ],
    "festivals": [
      "Chithirai Festival",
      "Navaratri",
      "Meenakshi Tirukalyanam"
    ],
    "dressCode": "Strict dress code. Men: Dhoti/Formal Trousers. Women: Saree/Salwar Kameez with dupatta.",
    "nearby": {
      "accommodation": "Many luxury and budget hotels near the temple.",
      "transport": "Madurai Junction Railway Station and Madurai International Airport."
    },
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/80/Madurai_Meenakshi_Temple_Gopuram.jpg"
  },
  {
    "id": "3",
    "name": "Somnath Temple",
    "location": {
      "state": "Gujarat",
      "city": "Veraval"
    },
    "deity": "Lord Shiva",
    "history": "The Somnath temple located in Prabhas Patan near Veraval in Saurashtra on the western coast of Gujarat, India is believed to be the first among the twelve jyotirlinga shrines of Shiva.",
    "timings": "6:00 AM - 9:00 PM",
    "rituals": [
      "Aarti: 7:00 AM, 12:00 PM, 7:00 PM"
    ],
    "festivals": [
      "Mahashivratri",
      "Kartik Purnima"
    ],
    "dressCode": "Decent clothing. Avoid shorts and sleeveless tops.",
    "nearby": {
      "accommodation": "Sagar Darshan Guest House and other hotels.",
      "transport": "Veraval Railway Station is the nearest."
    },
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/75/Somnath_Temple_Gujarat.jpg"
  },
  {
    "id": "4",
    "name": "Padmanabhaswamy Temple",
    "location": {
      "state": "Kerala",
      "city": "Thiruvananthapuram"
    },
    "deity": "Lord Vishnu (Anantha Padmanabha)",
    "history": "The richest place of worship in the world, this temple is built in an intricate fusion of the Chera style and the Dravidian style of architecture. The principal deity Vishnu is enshrined in the 'Anantha Shayanam' posture.",
    "timings": "3:30 AM - 12:00 PM, 5:00 PM - 8:30 PM",
    "rituals": [
      "Nirmalya Darshanam: 3:30 AM",
      "Usha Pooja: 5:15 AM",
      "Deeparadhana: 6:30 PM"
    ],
    "festivals": [
      "Alpashi Utsavam",
      "Painkuni Utsavam",
      "Laksha Deepam"
    ],
    "dressCode": "Strict Traditional. Men: Mundu (Dhoti) without shirt. Women: Saree or long skirt and blouse.",
    "nearby": {
      "accommodation": "Various hotels in Thiruvananthapuram city.",
      "transport": "Thiruvananthapuram Central Railway Station and International Airport."
    },
    "image": "https://www.sreestours.com/wp-content/uploads/2025/08/sree-padmanabhaswamy-temple-thiruvananthapuram-4.jpg"
  },
  {
    "id": "5",
    "name": "Jagannath Temple",
    "location": {
      "state": "Odisha",
      "city": "Puri"
    },
    "deity": "Lord Jagannath (Krishna)",
    "history": "A significant Hindu temple dedicated to Jagannath, a form of Vishnu, in Puri in the state of Odisha on the eastern coast of India. The temple is famous for its annual Ratha Yatra, or chariot festival.",
    "timings": "5:00 AM - 11:00 PM",
    "rituals": [
      "Dwarapala Puja: 5:00 AM",
      "Gopala Vallabha Bhoga: 8:30 AM",
      "Sandhya Dhupa: 7:00 PM"
    ],
    "festivals": [
      "Ratha Yatra",
      "Snana Yatra",
      "Chandan Yatra"
    ],
    "dressCode": "Traditional Indian attire. Non-Hindus are not allowed inside the main temple complex.",
    "nearby": {
      "accommodation": "Numerous dharamshalas and beach resorts in Puri.",
      "transport": "Puri Railway Station and Bhubaneswar Airport (60km)."
    },
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjcBF3KEqp5zzlp4Uo8tG-0hWLRUNWLuBXnw&s"
  },
  {
    "id": "6",
    "name": "Golden Temple",
    "location": {
      "state": "Punjab",
      "city": "Amritsar"
    },
    "deity": "Guru Granth Sahib",
    "history": "Also known as Harmandir Sahib, it is the preeminent spiritual site of Sikhism. The gurdwara is built around a man-made pool (sarovar) that was completed by the fourth Sikh Guru, Guru Ram Das, in 1577.",
    "timings": "Open 24 Hours",
    "rituals": [
      "Prakash of Guru Granth Sahib: 2:30 AM",
      "Sukhasan: 10:00 PM"
    ],
    "festivals": [
      "Vaisakhi",
      "Gurpurab",
      "Diwali"
    ],
    "dressCode": "Head must be covered. No shoes or socks allowed inside. Modest clothing.",
    "nearby": {
      "accommodation": "Sarai (lodges) within the complex and many hotels nearby.",
      "transport": "Amritsar Junction and Sri Guru Ram Dass Jee International Airport."
    },
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Golden_Temple_Amritsar_India.jpg"
  },
  {
    "id": "7",
    "name": "Venkateswara Temple",
    "location": {
      "state": "Andhra Pradesh",
      "city": "Tirumala"
    },
    "deity": "Lord Venkateswara (Vishnu)",
    "history": "Located in the hill town of Tirumala at Tirupati, it is one of the most visited and richest temples in the world. It is dedicated to Lord Venkateswara, an incarnation of Vishnu who is believed to have appeared here to save mankind from trials of Kali Yuga.",
    "timings": "Open 24 Hours (Darshan timings vary)",
    "rituals": [
      "Suprabhatam: 3:00 AM",
      "Thomala Seva: 3:45 AM",
      "Ekanta Seva: 1:30 AM"
    ],
    "festivals": [
      "Brahmotsavam",
      "Vaikuntha Ekadashi",
      "Rathasapthami"
    ],
    "dressCode": "Strict Traditional. Men: Dhoti/Kurta. Women: Saree/Half-saree/Churidar with Dupatta.",
    "nearby": {
      "accommodation": "TTD Guest Houses and private hotels in Tirupati.",
      "transport": "Tirupati Railway Station and Tirupati Airport."
    },
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBQ48sHcdXVkIT_NN_a2JmtzVkSgkI6m5rbQ&s"
  },
  {
    "id": "8",
    "name": "Badrinath Temple",
    "location": {
      "state": "Uttarakhand",
      "city": "Badrinath"
    },
    "deity": "Lord Vishnu (Badri Narayan)",
    "history": "One of the Char Dham and Chota Char Dham pilgrimage sites. It is situated in the Garhwal hill tracks in Chamoli district along the banks of the Alaknanda River.",
    "timings": "4:30 AM - 1:00 PM, 4:00 PM - 9:00 PM (Closed in Winter)",
    "rituals": [
      "Maha Abhishek: 4:30 AM",
      "Geeta Path: 9:00 PM"
    ],
    "festivals": [
      "Mata Murti Ka Mela",
      "Badri Kedar Festival"
    ],
    "dressCode": "Warm modest clothing. Traditional attire preferred.",
    "nearby": {
      "accommodation": "GMVN Guest Houses and private lodges.",
      "transport": "Nearest railhead is Rishikesh. Nearest airport is Jolly Grant, Dehradun."
    },
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSve9LBAZE9sJSkOwsmiU5Aq2NAZ-_SbBcjgg&s"
  },
  {
    "id": "9",
    "name": "Virupaksha Temple",
    "location": {
      "state": "Karnataka",
      "city": "Hampi"
    },
    "deity": "Lord Shiva (Virupaksha)",
    "history": "Part of the Group of Monuments at Hampi, a UNESCO World Heritage Site. The temple is dedicated to Lord Virupaksha, a form of Shiva. It has been a functioning temple since the 7th century AD.",
    "timings": "9:00 AM - 1:00 PM, 5:00 PM - 9:00 PM",
    "rituals": [
      "Morning Pooja: 9:00 AM",
      "Evening Aarti: 6:30 PM"
    ],
    "festivals": [
      "Hampi Utsav",
      "Virupaksha Car Festival",
      "Phalapuja Festival"
    ],
    "dressCode": "Decent clothing. Respectful of the sacred site.",
    "nearby": {
      "accommodation": "Guest houses in Hampi and hotels in Hospet.",
      "transport": "Hospet Railway Station is the nearest."
    },
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Hampi_virupaksha_temple.jpg/1200px-Hampi_virupaksha_temple.jpg"
  },
  {
    "id": "10",
    "name": "Kamakhya Temple",
    "location": {
      "state": "Assam",
      "city": "Guwahati"
    },
    "deity": "Goddess Kamakhya",
    "history": "A Hindu temple dedicated to the mother goddess Kamakhya. It is one of the oldest of the 51 Shakti Pithas. Situated on the Nilachal Hill in western part of Guwahati city.",
    "timings": "8:00 AM - 1:00 PM, 2:30 PM - 5:30 PM",
    "rituals": [
      "Snana: 5:30 AM",
      "Nitya Puja: 8:00 AM",
      "Aarti: 6:00 PM"
    ],
    "festivals": [
      "Ambubachi Mela",
      "Manasa Puja",
      "Durga Puja"
    ],
    "dressCode": "Traditional attire. Modest clothing required.",
    "nearby": {
      "accommodation": "Many hotels in Guwahati city.",
      "transport": "Guwahati Railway Station and Lokpriya Gopinath Bordoloi International Airport."
    },
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFU6j-qsY6MJsR1jDdyqEdrWmbmF4QqJLlzg&s"
  },
  {
    "id": "11",
    "name": "Siddhivinayak Temple",
    "location": {
      "state": "Maharashtra",
      "city": "Mumbai"
    },
    "deity": "Lord Ganesha",
    "history": "One of the most popular and richest temples in Mumbai. Dedicated to Lord Ganesha, the temple was originally built by Laxman Vithu and Deubai Patil in 1801.",
    "timings": "5:30 AM - 10:00 PM",
    "rituals": [
      "Kakad Aarti: 5:30 AM",
      "Naivedhya: 12:00 PM",
      "Shej Aarti: 10:00 PM"
    ],
    "festivals": [
      "Ganesh Chaturthi",
      "Angarki Sankashti Chaturthi",
      "Maghi Ganesh Jayanti"
    ],
    "dressCode": "Casual but modest. Avoid revealing clothes.",
    "nearby": {
      "accommodation": "Countless hotels in Mumbai.",
      "transport": "Dadar Railway Station and Chhatrapati Shivaji Maharaj International Airport."
    },
    "image": "https://divinehindu.com/wp-content/uploads/2025/12/Siddhivinayak-Temple.webp"
  },
  {
    "id": "12",
    "name": "Dakshineswar Kali Temple",
    "location": {
      "state": "West Bengal",
      "city": "Kolkata"
    },
    "deity": "Goddess Bhavatarini (Kali)",
    "history": "A Hindu navaratna temple located at Dakshineswar. Situated on the eastern bank of the Hooghly River, the presiding deity of the temple is Bhavatarini, an aspect of Kali. Built in 1855 by Rani Rashmoni.",
    "timings": "6:00 AM - 12:30 PM, 3:30 PM - 9:00 PM",
    "rituals": [
      "Bhog Aarti: 12:00 PM",
      "Sandhya Aarti: 7:00 PM"
    ],
    "festivals": [
      "Kali Puja",
      "Snana Yatra",
      "Kalpataru Day"
    ],
    "dressCode": "Traditional or modest casual.",
    "nearby": {
      "accommodation": "Hotels in Kolkata and Dakshineswar.",
      "transport": "Dakshineswar Railway Station and Netaji Subhash Chandra Bose International Airport."
    },
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQecNAv9xl5h0w2bTbpGTpPFmtIVx3hi7fAnw&s"
  },
  {
    "id": "13",
    "name": "Mahabodhi Temple",
    "location": {
      "state": "Bihar",
      "city": "Bodh Gaya"
    },
    "deity": "Lord Buddha",
    "history": "A UNESCO World Heritage Site, it is a Buddhist temple in Bodh Gaya, marking the location where the Buddha is said to have attained enlightenment. It is one of the four holy sites related to the life of the Lord Buddha.",
    "timings": "5:00 AM - 9:00 PM",
    "rituals": [
      "Chanting: 5:30 AM",
      "Meditation Sessions"
    ],
    "festivals": [
      "Buddha Purnima",
      "Nyingma Monlam Chenmo"
    ],
    "dressCode": "Modest clothing. Shoulders and knees must be covered.",
    "nearby": {
      "accommodation": "Monasteries and hotels in Bodh Gaya.",
      "transport": "Gaya Junction Railway Station and Gaya Airport."
    },
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe4QdnQN1snxG2BGJbRoA3gdoSz67G9QDcWw&s"
  },
  {
    "id": "14",
    "name": "Vaishno Devi Temple",
    "location": {
      "state": "Jammu & Kashmir",
      "city": "Katra"
    },
    "deity": "Goddess Vaishno Devi",
    "history": "A holy cave shrine dedicated to the Mother Goddess. It is located at an altitude of 5200 ft in the Trikuta Mountains. Millions of devotees undertake the 12km trek from Katra to reach the Bhawan.",
    "timings": "Open 24 Hours",
    "rituals": [
      "Atka Aarti: Morning & Evening"
    ],
    "festivals": [
      "Navaratri",
      "Diwali"
    ],
    "dressCode": "Comfortable trekking clothes. Modesty expected.",
    "nearby": {
      "accommodation": "Shrine Board Guest Houses and hotels in Katra.",
      "transport": "Shri Mata Vaishno Devi Katra Railway Station."
    },
    "image": "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYTBiYTUyNzAwLTg1YWItMTFmMC04NDliLWQxMWMzZjNiMjVlNy5qcGc="
  },
  {
    "id": "15",
    "name": "Dilwara Temples",
    "location": {
      "state": "Rajasthan",
      "city": "Mount Abu"
    },
    "deity": "Jain Tirthankaras",
    "history": "A group of svetambara Jain temples famous for their extraordinary architecture and marble stone carvings. Built between the 11th and 13th centuries AD.",
    "timings": "12:00 PM - 5:00 PM (For Tourists)",
    "rituals": [
      "Jain Puja: Morning (For Jains only)"
    ],
    "festivals": [
      "Mahavir Jayanti",
      "Paryushana"
    ],
    "dressCode": "Strictly modest. No leather items allowed inside.",
    "nearby": {
      "accommodation": "Hotels in Mount Abu.",
      "transport": "Abu Road Railway Station is the nearest."
    },
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Dilwara_Temple_Mount_Abu.jpg/1200px-Dilwara_Temple_Mount_Abu.jpg"
  },
  {
    "id": "16",
    "name": "Mahakaleshwar Jyotirlinga",
    "location": {
      "state": "Madhya Pradesh",
      "city": "Ujjain"
    },
    "deity": "Lord Shiva",
    "history": "One of the twelve Jyotirlingas, shrines which are said to be the most sacred abodes of Shiva. It is located in the ancient city of Ujjain and is situated on the side of the holy river Shipra.",
    "timings": "4:00 AM - 11:00 PM",
    "rituals": [
      "Bhasma Aarti: 4:00 AM",
      "Naivedya: 12:00 PM",
      "Shayan Aarti: 10:30 PM"
    ],
    "festivals": [
      "Mahashivratri",
      "Kumbh Mela (Simhastha)",
      "Sawari of Mahakal"
    ],
    "dressCode": "Traditional attire mandatory for Bhasma Aarti. Saree for women, Dhoti for men.",
    "nearby": {
      "accommodation": "Dharamshalas and hotels in Ujjain.",
      "transport": "Ujjain Junction Railway Station."
    },
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpsiXzP9hwqDHJb86p4rqZ2Vn8hJbGoZIOCw&s"
  },
  {
    "id": "17",
    "name": "Ramappa Temple",
    "location": {
      "state": "Telangana",
      "city": "Mulugu"
    },
    "deity": "Lord Shiva (Ramalingeswara)",
    "history": "A UNESCO World Heritage Site, it was built in 1213 AD during the reign of the Kakatiya Empire. The temple is named after its sculptor Ramappa, making it perhaps the only temple in India named after its architect.",
    "timings": "6:00 AM - 6:00 PM",
    "rituals": [
      "Daily Pooja: 6:00 AM"
    ],
    "festivals": [
      "Mahashivratri"
    ],
    "dressCode": "Decent clothing.",
    "nearby": {
      "accommodation": "Haritha Resorts and local lodges.",
      "transport": "Warangal Railway Station (70km)."
    },
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSorWI_yNA7lEEj52hGmeucx6FrMAMnbX7kfQ&s"
  },
  {
    "id": "18",
    "name": "Jwala Devi Temple",
    "location": {
      "state": "Himachal Pradesh",
      "city": "Kangra"
    },
    "deity": "Goddess Jwala Ji",
    "history": "One of the 51 Shakti Peethas, where the tongue of Sati is believed to have fallen. The temple is unique as there is no idol; instead, natural flames that emerge from the rocks are worshipped.",
    "timings": "5:00 AM - 10:00 PM",
    "rituals": [
      "Aarti: 5 times a day"
    ],
    "festivals": [
      "Navaratri",
      "Jwala Ji Fair"
    ],
    "dressCode": "Modest clothing. Warm clothes in winter.",
    "nearby": {
      "accommodation": "Temple guest houses and hotels in Kangra.",
      "transport": "Pathankot Railway Station (120km)."
    },
    "image": "https://www.haridwarrishikeshtourism.com/mussoorie-attraction/jwala-devi-temple-mussoorie.jpg"
  },
  {
    "id": "19",
    "name": "Shri Mangesh Temple",
    "location": {
      "state": "Goa",
      "city": "Ponda"
    },
    "deity": "Lord Shiva (Mangesh)",
    "history": "One of the largest and most frequently visited temples in Goa. It is dedicated to Bhagavan Manguesh, an incarnation of Lord Shiva. The temple architecture is a blend of Hindu, Christian, and Muslim styles.",
    "timings": "6:00 AM - 10:00 PM",
    "rituals": [
      "Daily Aarti: 12:30 PM, 8:00 PM"
    ],
    "festivals": [
      "Magh Purnima",
      "Zatra of Shri Manguesh"
    ],
    "dressCode": "Strict dress code. No shorts, mini-skirts, or sleeveless tops.",
    "nearby": {
      "accommodation": "Hotels in Ponda and Panaji.",
      "transport": "Madgaon Railway Station (30km)."
    },
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Mangueshi_Temple_Goa.jpg/1200px-Mangueshi_Temple_Goa.jpg"
  },
  {
    "id": "20",
    "name": "Tripura Sundari Temple",
    "location": {
      "state": "Tripura",
      "city": "Udaipur"
    },
    "deity": "Goddess Tripura Sundari",
    "history": "One of the 51 Shakti Peethas, it is situated in the ancient city of Udaipur. The temple is also known as Matabari and was built by Maharaja Dhanya Manikya in 1501 AD.",
    "timings": "5:00 AM - 9:00 PM",
    "rituals": [
      "Daily Puja: 8:00 AM",
      "Sandhya Aarti: 6:30 PM"
    ],
    "festivals": [
      "Diwali Mela",
      "Navaratri"
    ],
    "dressCode": "Traditional or modest casual.",
    "nearby": {
      "accommodation": "Government guest houses and local hotels.",
      "transport": "Agartala Railway Station (55km)."
    },
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Tripura_Sundari_Temple_Tripura.jpg/1200px-Tripura_Sundari_Temple_Tripura.jpg"
  },
  {
    "id": "21",
    "name": "Baidyanath Temple",
    "location": {
      "state": "Jharkhand",
      "city": "Deoghar"
    },
    "deity": "Lord Shiva",
    "history": "One of the twelve Jyotirlingas and one of the 51 Shakti Peethas. It is a temple complex consisting of the main temple of Baba Baidyanath and 21 other temples.",
    "timings": "4:00 AM - 9:00 PM",
    "rituals": [
      "Sarkari Puja: 4:00 AM"
    ],
    "festivals": [
      "Shravani Mela",
      "Mahashivratri"
    ],
    "dressCode": "Traditional. Saffron clothes preferred during Shravan month.",
    "nearby": {
      "accommodation": "Dharamshalas and hotels in Deoghar.",
      "transport": "Jasidih Junction Railway Station."
    },
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPg2Y2z-uQTIb-AsMyjIHagKLP-yKFm5U4hA&s"
  },
  {
    "id": "22",
    "name": "Danteshwari Temple",
    "location": {
      "state": "Chhattisgarh",
      "city": "Dantewada"
    },
    "deity": "Goddess Danteshwari",
    "history": "One of the 52 Shakti Peethas, dedicated to Goddess Danteshwari, the family deity of the Bastar state. The temple is situated at the confluence of the rivers Shankini and Dhankini.",
    "timings": "6:00 AM - 8:00 PM",
    "rituals": [
      "Daily Aarti: Morning & Evening"
    ],
    "festivals": [
      "Bastar Dussehra",
      "Navaratri"
    ],
    "dressCode": "Traditional or modest casual.",
    "nearby": {
      "accommodation": "Local lodges and government guest houses.",
      "transport": "Jagdalpur Railway Station (80km)."
    },
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Danteshwari_Temple_Dantewada.jpg/1200px-Danteshwari_Temple_Dantewada.jpg"
  },
  {
    "id": "23",
    "name": "Kirateshwar Mahadev Temple",
    "location": {
      "state": "Sikkim",
      "city": "Legship"
    },
    "deity": "Lord Shiva",
    "history": "Located on the banks of the Rangit River, it is associated with the episode of the Mahabharata where Lord Shiva appeared before Arjuna in the form of a Kirat (hunter).",
    "timings": "7:00 AM - 7:00 PM",
    "rituals": [
      "Daily Puja: Morning"
    ],
    "festivals": [
      "Bala Chaturdashi",
      "Mahashivratri"
    ],
    "dressCode": "Modest clothing. Warm clothes recommended.",
    "nearby": {
      "accommodation": "Guest houses in Legship and Pelling.",
      "transport": "New Jalpaiguri Railway Station (120km)."
    },
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_aBZTXYq7knH9EXbCbZsAossLF1ycDf3cBQ&s"
  },
  {
    "id": "24",
    "name": "Malinithan Temple",
    "location": {
      "state": "Arunachal Pradesh",
      "city": "Likabali"
    },
    "deity": "Goddess Durga (Malini)",
    "history": "An archaeological site consisting of the ruins of a Hindu temple built in the 14th-15th century. It is associated with the legend of Krishna and Rukmini visiting the site.",
    "timings": "8:00 AM - 5:00 PM",
    "rituals": [
      "Daily Puja: Morning"
    ],
    "festivals": [
      "Basanti Puja",
      "Navaratri"
    ],
    "dressCode": "Modest clothing.",
    "nearby": {
      "accommodation": "Lodges in Likabali and Silapathar.",
      "transport": "Silapathar Railway Station (10km)."
    },
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Malinithan_Temple_Arunachal_Pradesh.jpg/1200px-Malinithan_Temple_Arunachal_Pradesh.jpg"
  },
  {
    "id": "25",
    "name": "Shree Govindajee Temple",
    "location": {
      "state": "Manipur",
      "city": "Imphal"
    },
    "deity": "Lord Krishna and Radha",
    "history": "The largest Hindu temple in Imphal city. It was originally built in 1846 during the reign of Maharaja Nara Singh. The temple architecture is simple but elegant with gold-plated domes.",
    "timings": "5:00 AM - 12:00 PM, 4:00 PM - 9:00 PM",
    "rituals": [
      "Aarti: Morning & Evening"
    ],
    "festivals": [
      "Janmashtami",
      "Holi (Yaoshang)",
      "Rath Yatra"
    ],
    "dressCode": "Traditional Manipuri attire preferred. Modest clothing mandatory.",
    "nearby": {
      "accommodation": "Hotels in Imphal city.",
      "transport": "Imphal International Airport."
    },
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shree_Govindajee_Temple_Imphal.jpg/1200px-Shree_Govindajee_Temple_Imphal.jpg"
  },
  {
    "id": "26",
    "name": "Brahma Sarovar & Sthaneshwar Temple",
    "location": {
      "state": "Haryana",
      "city": "Kurukshetra"
    },
    "deity": "Lord Shiva",
    "history": "Kurukshetra is the land of the Bhagavad Gita. Brahma Sarovar is an ancient water tank sacred to Hindus. The Sthaneshwar Mahadev Temple is where the Pandavas prayed to Lord Shiva and received his blessings before the Mahabharata war.",
    "timings": "Open 24 Hours (Temple: 6:00 AM - 8:00 PM)",
    "rituals": [
      "Deep Daan: Evening at Brahma Sarovar"
    ],
    "festivals": [
      "Gita Mahotsav",
      "Solar Eclipse Mela"
    ],
    "dressCode": "Modest clothing.",
    "nearby": {
      "accommodation": "Dharamshalas and hotels in Kurukshetra.",
      "transport": "Kurukshetra Junction Railway Station."
    },
    "image": "https://avathioutdoors.gumlet.io/travelGuide/dev/kurukshetra_P2015.jpg"
  },
  {
    "id": "27",
    "name": "Nartiang Durga Temple",
    "location": {
      "state": "Meghalaya",
      "city": "West Jaintia Hills"
    },
    "deity": "Goddess Durga",
    "history": "A 600-year-old temple and one of the 51 Shakti Peethas. It is believed that the left thigh of Goddess Sati fell here. The temple is unique for its blend of Khasi and Hindu traditions.",
    "timings": "7:00 AM - 6:00 PM",
    "rituals": [
      "Daily Puja: Morning"
    ],
    "festivals": [
      "Durga Puja (celebrated with unique Khasi rituals)"
    ],
    "dressCode": "Modest clothing.",
    "nearby": {
      "accommodation": "Guest houses in Jowai.",
      "transport": "Guwahati Railway Station (160km)."
    },
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC8stJkC5RwbaE-7l-TQJbl-kdj25vkztL7w&s"
  },
  {
    "id": "28",
    "name": "Om Temple",
    "location": {
      "state": "Mizoram",
      "city": "Aizawl"
    },
    "deity": "Lord Shiva",
    "history": "A serene temple located on a hilltop in Aizawl, offering panoramic views of the city. It is a center for spiritual meditation and peace.",
    "timings": "6:00 AM - 7:00 PM",
    "rituals": [
      "Daily Aarti: Morning & Evening"
    ],
    "festivals": [
      "Mahashivratri"
    ],
    "dressCode": "Modest clothing.",
    "nearby": {
      "accommodation": "Hotels and guest houses in Aizawl.",
      "transport": "Lengpui Airport, Aizawl."
    },
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3H87atuZl8zx3nfkFj9HRmxxOuiy3zPGatw&s"
  },
  {
    "id": "29",
    "name": "Dimapur Kalibari",
    "location": {
      "state": "Nagaland",
      "city": "Dimapur"
    },
    "deity": "Goddess Kali",
    "history": "Built in 1956, it is one of the most famous Hindu temples in Nagaland. The temple is known for its spiritual atmosphere and social service activities.",
    "timings": "5:00 AM - 9:00 PM",
    "rituals": [
      "Daily Aarti: 7:00 PM"
    ],
    "festivals": [
      "Kali Puja",
      "Durga Puja"
    ],
    "dressCode": "Modest clothing.",
    "nearby": {
      "accommodation": "Hotels in Dimapur city.",
      "transport": "Dimapur Railway Station and Dimapur Airport."
    },
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Kalibari_Dimapur.jpg/1200px-Kalibari_Dimapur.jpg"
  },
  {
    "id": "30",
    "name": "Kedarnath Temple",
    "location": {
      "state": "Uttarakhand",
      "city": "Kedarnath"
    },
    "deity": "Lord Shiva",
    "history": "One of the holiest Hindu temples dedicated to Lord Shiva, located in the Garhwal Himalayan range near the Mandakini river. It is one of the twelve Jyotirlingas of Lord Shiva.",
    "timings": "4:00 AM - 9:00 PM (Closed in Winter)",
    "rituals": [
      "Maha Abhishek: 4:00 AM",
      "Shayan Aarti: 8:30 PM"
    ],
    "festivals": [
      "Mahashivratri",
      "Badri-Kedar Utsav"
    ],
    "dressCode": "Warm modest clothing.",
    "nearby": {
      "accommodation": "GMVN Guest Houses and local lodges in Kedarnath and Gaurikund.",
      "transport": "Nearest railhead is Rishikesh. Nearest airport is Jolly Grant, Dehradun. Requires a 16km trek from Gaurikund."
    },
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Kedarnath_Temple_Uttarakhand.jpg/1200px-Kedarnath_Temple_Uttarakhand.jpg"
  },
  {
    "id": "31",
    "name": "Konark Sun Temple",
    "location": {
      "state": "Odisha",
      "city": "Konark"
    },
    "deity": "Sun God (Surya)",
    "history": "A 13th-century CE Sun temple at Konark about 35 kilometers northeast from Puri on the coastline of Odisha, India. The temple is attributed to king Narasimhadeva I of the Eastern Ganga Dynasty about 1250 CE.",
    "timings": "6:00 AM - 8:00 PM",
    "rituals": [
      "Daily Puja: Morning"
    ],
    "festivals": [
      "Konark Dance Festival",
      "Chandrabhaga Mela"
    ],
    "dressCode": "Modest clothing.",
    "nearby": {
      "accommodation": "OTDC Panthanivas and private hotels in Konark.",
      "transport": "Well connected by road from Puri and Bhubaneswar."
    },
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTYHO3RXr8HmwNc_cQiDm1zRRlV_wJtedNOA&s"
  },
  {
    "id": "32",
    "name": "Brihadeeswarar Temple",
    "location": {
      "state": "Tamil Nadu",
      "city": "Thanjavur"
    },
    "deity": "Lord Shiva",
    "history": "A Hindu temple dedicated to Shiva located in South bank of Kaveri river in Thanjavur, Tamil Nadu, India. It is one of the largest South Indian temples and an exemplary example of a fully realized Dravidian architecture.",
    "timings": "6:00 AM - 12:30 PM, 4:00 PM - 8:30 PM",
    "rituals": [
      "Daily Puja: 6 times a day"
    ],
    "festivals": [
      "Brahmotsavam",
      "Maha Shivaratri"
    ],
    "dressCode": "Traditional attire preferred.",
    "nearby": {
      "accommodation": "Hotels in Thanjavur city.",
      "transport": "Thanjavur Junction Railway Station."
    },
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk55sURm46lr3uN56RD890Dng4n7ZKalmO9Q&s"
  },
  {
    "id": "33",
    "name": "Lotus Temple",
    "location": {
      "state": "Delhi",
      "city": "New Delhi"
    },
    "deity": "Universal (Baháʼí House of Worship)",
    "history": "A Baháʼí House of Worship that was dedicated in December 1986. Notable for its flowerlike shape, it has become a prominent attraction in the city.",
    "timings": "9:00 AM - 5:30 PM (Closed on Mondays)",
    "rituals": [
      "Silent Prayer & Meditation"
    ],
    "festivals": [
      "Baháʼí Holy Days"
    ],
    "dressCode": "Modest clothing. Maintain silence.",
    "nearby": {
      "accommodation": "Numerous hotels in New Delhi.",
      "transport": "Kalkaji Mandir Metro Station is the nearest."
    },
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/LotusTemple.jpg/1200px-LotusTemple.jpg"
  },
  {
    "id": "34",
    "name": "Akshardham Temple",
    "location": {
      "state": "Delhi",
      "city": "New Delhi"
    },
    "deity": "Swaminarayan",
    "history": "A Hindu temple, and a spiritual-cultural campus in Delhi, India. The temple displays millennia of traditional and modern Hindu culture, spirituality, and architecture.",
    "timings": "10:00 AM - 6:30 PM (Closed on Mondays)",
    "rituals": [
      "Aarti: Morning & Evening",
      "Water Show: Evening"
    ],
    "festivals": [
      "Diwali",
      "Annakut"
    ],
    "dressCode": "Strict dress code. Shoulders, chest, navel, and upper arms must be covered. Bottom wear must be below knee length.",
    "nearby": {
      "accommodation": "Hotels in New Delhi.",
      "transport": "Akshardham Metro Station is the nearest."
    },
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Akshardham_Temple_Delhi.jpg/1200px-Akshardham_Temple_Delhi.jpg"
  }
];
