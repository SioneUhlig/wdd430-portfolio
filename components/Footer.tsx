export default async function Footer() {
  "use cache";
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-4 mt-12">
      <div className="container mx-auto text-center">
        <p>Copyright &copy; {new Date().getFullYear()} | Sione Uhlig | All rights reserved</p>
      </div>
    </footer>
  );
}