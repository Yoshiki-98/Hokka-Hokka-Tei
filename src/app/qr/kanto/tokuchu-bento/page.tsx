import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

export default function Page() {
  const headersList = headers();
  const domain = headersList.get('host');

  if (
    domain?.startsWith('localhost') ||
    domain === 'store.hokkahokka-tei.jp' ||
    domain === 'hokka-hokka-tei-dev.vercel.app'
  ) {
    redirect('https://www.hokkahokka-tei.jp/menu/012/search.php?pref=13&order=1&cate012_009=cate012_009');
  }

  return <div/>;
}
