import Navigation from '@/app/_components/Navigation';
import Logo from '@/app/_components/Logo';

function Header() {
  return (
    <header className="border-b border-primary-900 px-5 py-4">
      <div className="flex flex-col md724:flex-row md724:justify-between md724:items-center max-w-7xl mx-auto gap-4">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
