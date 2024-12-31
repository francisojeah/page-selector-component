import PageSelector from './components/PageSelector';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <PageSelector pages={["Page 1", "Page 2", "Page 3", "Page 4"]} />
    </main>
  );
}