import Sidebar from './Sidebar'

const RootLayout = ({children}) => {
  return (
    <div className='flex'>
      <Sidebar />
      <main className="max-w-5xl flex-1 mx-auto py-4">{children}</main>
    </div>
  );
}

export default RootLayout