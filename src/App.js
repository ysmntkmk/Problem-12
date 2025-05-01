 // Tabs bileşenini yeniden düzenleyin ve aşağıdaki görevleri tamamlayın:
 // 1. State setter fonksiyonunu doğru şekilde kullanarak geçerli sekmeyi (currentTab) güncelleyin.
 // 2. Tailwind kullanarak aşağıdaki değişiklikleri yapın:
 //    - Aktif sekmenin arka plan rengini daha belirgin hale getirin. (örneğin: "bg-indigo-200")
 //    - Sekmeler arasındaki boşluğu artırmak için "space-x-6" kullanın.
 //    - Aktif olmayan sekmelere hover sırasında hafif büyüme efekti ekleyin. (örneğin: "hover:scale-105")
 // 3. Kullanıcı farklı sekmeye tıkladığında, geçerli sekmenin adını ekranda dinamik olarak görüntüleyin. (örneğin: "Şu anda 'Ekip Üyeleri' sekmesindesiniz.")
 // 4. Sekmelerin içeriğini (örneğin: "Hesabım" sekmesi için form, "Faturalama" sekmesi için tablo) dinamik olarak değiştirmek için içerik alanı ekleyin.




import { useState } from 'react'
// React kütüphanesinden useState hook'u içe aktarılıyor.
// useState, bileşenlerin durumunu yönetmek için kullanılır.

// Sekme başlıklarını içeren bir dizi tanımlanıyor.
const tabs = ['Hesabım', 'Şirket', 'Ekip Üyeleri', 'Faturalama']

export default function Tabs() {
  // `currentTab` adında bir state değişkeni tanımlanıyor ve başlangıç değeri 'Hesabım' olarak ayarlanıyor.
  // `setCurrentTab` ise bu state'i güncellemek için kullanılan fonksiyon.
  const [currentTab, setCurrentTab] = useState('Hesabım')

  // `renderContent` fonksiyonu, geçerli sekmeye göre dinamik içerik döndürüyor.
  const renderContent = () => {
    switch (currentTab) {
      case 'Hesabım':
        return <div>Hesabım İçeriği</div> // Eğer geçerli sekme 'Hesabım' ise burası döner.
      case 'Şirket':
        return <div>Şirket İçeriği</div> // Eğer geçerli sekme 'Şirket' ise burası döner.
      case 'Ekip Üyeleri':
        return <div>Ekip Üyeleri İçeriği</div> // Eğer geçerli sekme 'Ekip Üyeleri' ise burası döner.
      case 'Faturalama':
        return <div>Faturalama İçeriği</div> // Eğer geçerli sekme 'Faturalama' ise burası döner.
      default:
        return null // Hiçbir geçerli sekme bulunmazsa, boş döner.
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Sekmeler</h1>
      <div className="flex space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setCurrentTab(tab)} // Butona tıklandığında geçerli sekmeyi günceller.
            className={`px-4 py-2 rounded-lg transition-transform duration-200 ${
              currentTab === tab
                ? 'bg-indigo-200 text-indigo-800'
                : 'hover:scale-105'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <p>Şu anda '{currentTab}' sekmesindesiniz.</p> {/* Geçerli sekmeyi gösterir. */}
        <br />
        <p>{renderContent()} </p>{/* Geçerli sekmeye göre içerik render edilir. */}
      </div>
    </div>
  )
}
