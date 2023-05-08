import { useRouter } from 'next/router';

const withAuth = (WrappedComponent) => {

    
  const Auth = (props) => {
    const router = useRouter();

    // Check for the presence of a JWT token


    if (typeof window !== 'undefined') {
        // Perform localStorage action
        const token = localStorage.getItem('token');

        if (!token) {
            
            router.push('/Comp/Login');
            return null;
          }
      

    }

    
    // Render the wrapped component if a token is present
    return <WrappedComponent {...props} />;
  };

  // Set the display name for debugging purposes
  Auth.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return Auth;
};

export default withAuth;
