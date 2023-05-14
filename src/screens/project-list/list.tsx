import { User } from "./search-panel";
import React from "react";
import { Table } from "antd";

export interface Project {
  id: number;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}

interface ListProps {
  users: User[];
  list: Project[];
}

export const List = ({ users, list }: ListProps) => {
  return (
    <>
      <Table
        pagination={false}
        columns={[
          {
            title: "名称",
            dataIndex: "name",
            sorter: (a, b) => a.name.localeCompare(b.name),
          },
          {
            title: "负责人",
            render(value, project) {
              return (
                <span>
                  {" "}
                  {users.find(({ id }) => id === project.personId)?.name ||
                    "未知"}
                </span>
              );
            },
          },
        ]}
        dataSource={list}
      />
    </>
  );
};
