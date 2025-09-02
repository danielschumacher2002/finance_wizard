import { ToolCard } from "./ToolCard";
import { dashboardData } from "../assets/data/dashBoardData";
import ContentContainer from "./ContentContainer";

export default function HomeDashboard() {
  return (
    <ContentContainer title={"Dashboard"}>
      {/* ToolCards Container spaeter grid bei grossen screen*/}
      <div
        className="sm:grid sm:grid-cols-2 lg:grid-cols-3
                      sm:p-4 sm:gap-4"
      >
        {dashboardData.map((data) => {
          return (
            <ToolCard
              path={data.path}
              color={data.color}
              title={data.title}
              desc={data.desc}
              link={data.link}
            />
          );
        })}
      </div>
    </ContentContainer>
  );
}
