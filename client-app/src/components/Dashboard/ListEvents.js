import React from "react";
import { List, ListItem } from "material-ui/List";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import ActionGrade from "material-ui/svg-icons/action/grade";
import ContentSend from "material-ui/svg-icons/content/send";
import ContentDrafts from "material-ui/svg-icons/content/drafts";
import Divider from "material-ui/Divider";
import ActionInfo from "material-ui/svg-icons/action/info";

const ListEvents = (
  <div>
    <div className="eventbox">
      <form className="event">
        <h4>List of Events</h4>
        <List>
          <ListItem
            primaryText="Event has been added here"
            leftIcon={<ActionGrade />}
          />
          <ListItem
            primaryText="Event has been added here"
            leftIcon={<ActionGrade />}
          />
          <ListItem
            primaryText="Event has been added here"
            leftIcon={<ActionGrade />}
          />
          <ListItem
            primaryText="Event has been added here"
            leftIcon={<ActionGrade />}
          />
          <ListItem
            primaryText="Event has been added here"
            leftIcon={<ActionGrade />}
          />
          <ListItem
            primaryText="Event has been added here"
            leftIcon={<ActionGrade />}
          />
        </List>
      </form>
    </div>
  </div>
);

export default ListEvents;
