const Header = ({ user }) => {
      return (
        <nav>
          <ul>
            <li>Accueil revision props</li>
            {user.isLogged ? <li>Voir mon profil</li> : <li>Créer un compte</li>}
          </ul>
        </nav>
      );
    };
    
    export default Header;