import { useAuthContext } from '../auth/authProvider/AuthContext';

type indexType = { [key: string]: string };
export default function DataStudioContainer() {
  const { user } = useAuthContext();

  const frameUrl: indexType = {
    area: 'https://datastudio.google.com/embed/reporting/725b4254-bc68-43e4-a8e4-17ded596c35f/page/xDDwC',
    district:
      'https://datastudio.google.com/u/0/reporting/2bc2f943-9e7b-4e04-bc24-b6068e63289b/page/xDDwC',
    regional: '',
    executive:
      'https://datastudio.google.com/embed/reporting/d4720445-c07a-46c7-a954-896cfde70b7a/page/xDDwC',
  };
  return (
    <div>
      <iframe
        // width="600"
        height="500"
        src={`${frameUrl[user?.group]}?params=%7B"ds12.company":"${
          user?.company
        }"%7D`}
        frameBorder="0"
        style={{
          border: '0px',
          width: '100%',
        }}
        allowFullScreen
      />
    </div>
  );
}
