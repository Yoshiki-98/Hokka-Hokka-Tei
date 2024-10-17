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
    redirect('https://www.hokkahokka-tei.jp/menu/008/search.php?pref=43&order=1&cate008_009=cate008_009');
  }

  return <div/>;
}
