import React from "react";
import InteractionVolume from "./charts/InteractionVolume";
import WorkflowOverview from "./charts/WorkflowOverview";
import PatientServicesKPIs from "./charts/PatientServicesKPIs";

const Dashboard: React.FC = () => {
  return (
    <section className="flex w-full gap-4 flex-wrap mt-6 max-md:max-w-full">
      <InteractionVolume />
      <WorkflowOverview />
      <PatientServicesKPIs />
    </section>
  );
};

export default Dashboard;
