import { RequestEntityWithUser } from "@/entities/request/model/types";
import { AdminRequestCard } from "@/entities/request/ui";

import { Grid } from "@/shared/ui/grid";

interface AdminDashboardProps {
  list: RequestEntityWithUser[];
}

const AdminDashboard = ({ list }: AdminDashboardProps) => {
  return (
    <div className="space-y-4">
      <div id="requests" className="space-y-2">
        <Grid>
          {list ? list.map((request) => (
            <AdminRequestCard key={request.id} request={request} />
          )) : <span>Нет заявок</span>}
        </Grid>
      </div>
    </div>
  );
};

export default AdminDashboard;
