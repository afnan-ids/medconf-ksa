import EventScheduleContent from "../../../../Components/HealthCarePortal/EventScheduleContent";
import { upcomingEvents } from "../../../../Data/hcp-data";
import { getColorClasses } from "../../../../utils/colorUtils";

export default function EventSchedule() {
  return <EventScheduleContent upcomingEvents={upcomingEvents} />;
}