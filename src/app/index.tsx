import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // View — กรอบทั้งหน้า
    <View style={styles.container}>
      {/* Image — รูปโปรไฟล์ */}
      <Image
        source={require('@/assets/images/file.jpg')}
        style={styles.profileImage}
      />

      {/* Text — ชื่อ */}
      <Text style={styles.nameText}>อดิศักดิ์ สวยกิจ</Text>

      {/* Text — คำอธิบาย */}
      <Text style={styles.descText}>แตกกลางยังโดนเท ปัดเป๊ะเหลืออะไร</Text>

      {/* View — การ์ดข้อมูล */}
      <View style={styles.cardView}>
        <Text style={styles.cardText}>ห้อง BTI.1/5 เลขที่ 5</Text>
        <Text style={styles.cardText}>Email: adisak.suaykit@e-tech.ac.th</Text>
        <Text style={styles.cardText}>Phone: 0645902407</Text>
      </View>

      {/* Text — หัวข้อ "ภาพกิจกรรม" */}
      <Text style={styles.sectionTitle}>ภาพกิจกรรม</Text>

      {/* View — แถวรูป */}
      <View style={styles.imageRow}>
        <Image
          source={{uri:"https://images.pexels.com/photos/30924264/pexels-photo-30924264/free-photo-of-serene-ocean-view-with-blue-skies-and-waves.jpeg?cs=tinysrgb&dpr=1&w=500"}}
          style={styles.activityImage}
        />
        <Image
          source={{uri:"https://images.pexels.com/photos/33927121/pexels-photo-33927121.jpeg?cs=srgb&dl=pexels-veronika-kravchenko-2155849414-33927121.jpg&fm=jpg"}}
          style={styles.activityImage}
        />
        <Image
          source={{uri:"https://static.vecteezy.com/system/resources/thumbnails/023/619/222/small/view-of-the-beautiful-cloud-forest-and-the-quindio-wax-palms-at-the-cocora-valley-located-in-salento-in-the-quindio-region-in-colombia-photo.jpg"}}
          style={styles.activityImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // กรอบทั้งหน้า
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 64,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  // รูปโปรไฟล์
  profileImage: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: 12,
  },
  // ชื่อ
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
    textAlign: 'center',
  },
  // คำอธิบาย
  descText: {
    fontSize: 13,
    color: '#737373',
    marginBottom: 20,
    textAlign: 'center',
  },
  // การ์ดข้อมูล
  cardView: {
    backgroundColor: '#f2f2f5',
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 18,
    width: '100%',
    gap: 6,
    marginBottom: 24,
  },
  // ข้อความภายในการ์ด (ห้อง / อีเมล / เบอร์)
  cardText: {
    fontSize: 14,
    color: '#333333',
    lineHeight: 20,
  },
  // หัวข้อ "ภาพกิจกรรม"
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1a1a1a',
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  // แถวรูป
  imageRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    gap: 10,
  },
  // รูปกิจกรรม
  activityImage: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 10,
  },
});
