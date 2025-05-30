import { ParentComponent, createSignal } from "solid-js";
import {
  Home,
  Grid,
  Bell,
  PieChart,
  Heart,
  Wallet,
  MessageSquare,
} from "lucide-solid";

const Layout: ParentComponent = (props) => {
  const [active, setActive] = createSignal("dashboard");

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "projects", label: "Projects", icon: Grid },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "analytics", label: "Analytics", icon: PieChart },
    { id: "likes", label: "Likes", icon: Heart },
    { id: "wallets", label: "Wallets", icon: Wallet },
    { id: "messages", label: "Messages", icon: MessageSquare },
    ...Array.from({ length: 20 }, (_, i) => ({
      id: `messages${i + 1}`,
      label: `Messages ${i + 1}`,
      icon: MessageSquare,
    })),
  ];

  return (
    <div class="min-h-screen flex flex-col">
      <header class="bg-gray-900 text-white p-4 flex justify-between items-center">
        <h1 class="text-xl font-bold">Dashboard</h1>
      </header>

      <div class="flex flex-grow h-[calc(100vh-64px-64px)]">
        {/* Sidebar */}
        <aside class="w-64 bg-white border-r border-gray-200 overflow-y-auto">
          <nav class="p-4 space-y-2">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                onClick={() => setActive(id)}
                class={`w-full flex items-center gap-3 p-2 rounded-lg text-left ${
                  active() === id
                    ? "bg-blue-100 text-blue-700 font-medium"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <Icon class="w-5 h-5" />
                {label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <section class="flex-grow overflow-y-auto p-6 bg-gray-100">
          <div class="space-y-4">
            {props.children}
          </div>
        </section>
      </div>

      <footer class="bg-gray-900 text-white p-4 text-center">
        &copy; 2025 Meow -&gt; Wow
      </footer>
    </div>
  );
};

export default Layout;
