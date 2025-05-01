import { useState } from "react";

// Tabs bileşenini yeniden düzenleyin ve aşağıdaki görevleri tamamlayın:
// 1. State setter fonksiyonunu doğru şekilde kullanarak geçerli sekmeyi (currentTab) güncelleyin.
// 2. Tailwind kullanarak aşağıdaki değişiklikleri yapın:
//    - Aktif sekmenin arka plan rengini daha belirgin hale getirin. (örneğin: "bg-indigo-200")
//    - Sekmeler arasındaki boşluğu artırmak için "space-x-6" kullanın.
//    - Aktif olmayan sekmelere hover sırasında hafif büyüme efekti ekleyin. (örneğin: "hover:scale-105")
// 3. Kullanıcı farklı sekmeye tıkladığında, geçerli sekmenin adını ekranda dinamik olarak görüntüleyin. (örneğin: "Şu anda 'Ekip Üyeleri' sekmesindesiniz.")
// 4. Sekmelerin içeriğini (örneğin: "Hesabım" sekmesi için form, "Faturalama" sekmesi için tablo) dinamik olarak değiştirmek için içerik alanı ekleyin.

const tabs = ["Hesabım", "Şirket", "Ekip Üyeleri", "Faturalama"];

function App() {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const renderContent = () => {
    switch (currentTab) {
      case "Hesabım":
        return <div>📄 Hesabım sekmesinin içeriği </div>;
      case "Şirket":
        return <div>🏢 Şirket sekmesinin içeriği</div>;
      case "Ekip Üyeleri":
        return <div>👥 Ekip Üyeleri sekmesinin içeriği</div>;
      case "Faturalama":
        return <div>💳 Faturalama sekmesinin içeriği </div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center my-8">
      <div className="flex flex-col items-center space-y-6" aria-label="Tabs">
        <div className="flex space-x-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setCurrentTab(tab)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition transform duration-200 ${
                tab === currentTab
                  ? "bg-indigo-200 text-indigo-800"
                  : "text-gray-500 hover:text-gray-700 hover:scale-105"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="text-center text-lg font-semibold">
          <p>Şu anda <span className="text-indigo-600">"{currentTab}"</span> sekmesindesiniz.</p>
        </div>
        <div className="mt-4 text-indigo-400 p-4 border rounded-lg w-full max-w-xl bg-gray-50 shadow-sm">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;