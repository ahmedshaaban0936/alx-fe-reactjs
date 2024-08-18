import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';  // Import statement for WelcomeMessage
import UserProfile from './components/UserProfile.jsx';
// src/App.jsx
import React from 'react';
import ProfilePage from './ProfilePage';
import { UserProvider } from './UserContext';  // Import UserProvider

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserProvider value={userData}>  {/* Wrap ProfilePage with UserProvider */}
      <ProfilePage />
    </UserProvider>
  );
}


function App() {
    return (
        <div> className="App"
            <Header />
            <WelcomeMessage />  {/* Usage of WelcomeMessage component */}
            <MainContent />
            <UserProfile
                name="Alice"
                age="25"
                bio="Loves hiking and photography"
            />
            <Footer />
        </div>
    );
}

export default App;