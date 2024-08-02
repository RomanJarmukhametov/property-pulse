import '@/assets/styles/global.css';

export const metadata = {
  title: 'Property Pulse',
  description: 'Property Pulse',
};

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
