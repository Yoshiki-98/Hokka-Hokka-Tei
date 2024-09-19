export const sanitizePhoneNumber = (phone: string): string => {
  return phone.replace(/\D/g, '');  // 数字以外の文字を全て削除
}

// 表示時
export const formatPhoneNumber = (phone: string): string => {
  if (phone.length === 10) {
    // 固定電話 (03-XXXX-XXXX)
    const match = phone.match(/^(\d{2})(\d{4})(\d{4})$/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
  } else if (phone.length === 11) {
    // 携帯電話 (090-XXXX-XXXX)
    const match = phone.match(/^(\d{3})(\d{4})(\d{4})$/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
  } else if (phone.length === 9) {
    // 市外局番が1桁の固定電話 (0X-XXXX-XXXX)
    const match = phone.match(/^(\d{1})(\d{4})(\d{4})$/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
  }
  // 上記のいずれにも当てはまらない場合は、そのまま返す
  return phone;
}
