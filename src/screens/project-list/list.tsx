import { User } from "./search-panel";
import React from "react";
import { Table } from "antd";
import dayjs from "dayjs";

export interface Project {
  id: number;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
  created: number;
}

interface ListProps {
  users: User[];
  list: Project[];
}

export const List = ({ users, list }: ListProps) => {
  return (
    <>
      <Table
        key={"name"}
        rowKey={(record) => record.id}
        pagination={false}
        columns={[
          {
            title: "名称",
            dataIndex: "name",
            sorter: (a, b) => a.name.localeCompare(b.name),
          },
          {
            title: "部门",
            dataIndex: "organization",
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
          {
            title: "创建时间",
            render(value, project) {
              return (
                <span>
                  {project.created
                    ? dayjs(project.created).format("YYYY-MM-DD")
                    : "无"}
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
