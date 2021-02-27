import { BsBookmarkPlus } from "react-icons/bs";

export default function List() {
  return (
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        Cras justo odio <BsBookmarkPlus />
      </li>
      <li className="list-group-item">
        Dapibus ac facilisis in <BsBookmarkPlus />
      </li>
      <li className="list-group-item">
        Morbi leo risus <BsBookmarkPlus />
      </li>
      <li className="list-group-item">
        Porta ac consectetur ac <BsBookmarkPlus />
      </li>
      <li className="list-group-item">
        Vestibulum at eros <BsBookmarkPlus />
      </li>
    </ul>
  );
}
