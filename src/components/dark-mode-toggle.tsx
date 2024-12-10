export default function DarkModeToggle() {
  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <div className="transition-all">
      <input
        onChange={toggleDarkMode}
        type="checkbox"
        className="appearance-none h-6 w-12 bg-slate-300 dark:bg-slate-900 rounded-full relative before:h-6 before:w-6 before:absolute before:bg-slate-900 dark:before:bg-slate-300 before:rounded-full before:scale-110 checked:before:translate-x-6 transition-all before:transition-all"
      />
    </div>
  );
}
