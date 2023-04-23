
export default function DashboardProblemTableHeader() { 
    return (
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 text-sm font-medium text-gray-900"
                  >
                    Difficulty
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-sm font-medium text-gray-900"
                  >
                    Problem Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-sm font-medium text-gray-900"
                  >
                    Solved
                  </th>
                </tr>
              </thead>
    )
}