export function BilingualText({ en, zh }: { en: React.ReactNode; zh: React.ReactNode }) {
  return (
    <>
      <span className="lang-en">{en}</span>
      <span className="lang-zh">{zh}</span>
    </>
  );
}
