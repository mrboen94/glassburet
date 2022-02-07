import { People } from "../../../pages/unrated";

export default function CheckBoxList({
  people,
  onChange,
}: {
  people: People;
  onChange: Function;
}) {
  console.log(people);
  return (
    <fieldset>
      <legend className="text-lg font-medium text-gray-900">Members</legend>
      <div className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200 md:max-w-md">
        {Object.entries(people).map(([name, checked]) => (
          <div key={name} className="relative flex items-start py-4">
            <div className="min-w-0 flex-1 text-sm">
              <label
                htmlFor={`person-${name}`}
                className="font-medium text-gray-700 select-none"
              >
                {name}
              </label>
            </div>
            <div className="ml-3 flex items-center h-5">
              <input
                id={`person-${name}`}
                name={`person-${name}`}
                defaultChecked={checked}
                type="checkbox"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                onChange={(e) =>
                  onChange({ ...people, ...{ [name]: e.target.checked } })
                }
              />
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
