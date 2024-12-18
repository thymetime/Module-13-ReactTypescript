// const Nav = () => {
//   // TODO: Add necessary code to display the navigation bar and link between the pages
//   return (
//     <div>Nav</div>
//   )
// };

// export default Nav;

import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
const Nav = () => {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav">
      <li className="nav-item">
        <Link
          to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          CandidateSearch
        </Link>
      </li>
      {/* <li className="nav-item">
        <Link
          to="/CandidateSearch"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/CandidateSearch' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Link>
      </li> */}
      <li className="nav-item">
        <Link
          to="/SavedCandidates"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/SavedCandidates' ? 'nav-link active' : 'nav-link'}
        >
          SavedCandidates
        </Link>
      </li>
    </ul>
  );
}

export default Nav;

