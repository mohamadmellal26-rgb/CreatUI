import { useParams } from 'react-router-dom';
import Contenet1 from './contenet1/contenet1';
import Contenet2 from './contenet2/contenet2';

export default function ComponentDetailsPage() {
  const { id } = useParams(); // هنا نحصل على الـ id من الرابط (مثلاً 1 أو 2)

  if (id === '1') return <Contenet1 />;
  if (id === '2') return <Contenet2 />;
  
  return <div>الصفحة غير موجودة</div>;
}