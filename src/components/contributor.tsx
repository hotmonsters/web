interface ContributorUser {
  name?: string;
  age?: string;
}

interface ContributorProps {
  user: ContributorUser;
  onChange: (partial: ContributorUser) => void;
}

const Contributor = ({ user, onChange }: ContributorProps) => (
  <div>
    <p>you:</p>
    <p>
    <input
      placeholder="name"
      value={user.name ?? ""}
      onChange={(event) => onChange({ name: event.target.value })}
    />
    </p>
    <p>
    <input
      placeholder="age"
      value={user.age ?? ""}
      onChange={(event) => onChange({ age: event.target.value })}
    />
    </p>
  </div>
);

export default Contributor;
