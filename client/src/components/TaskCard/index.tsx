import { Task } from "@/state/api";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";

type Props = {
  task: Task;
};

const TaskCard = ({ task }: Props) => {
  return (
    <div className="mb-4 rounded-lg border border-gray-300 bg-white p-6 shadow-md hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100">
      {/* Attachments Section */}
      {task.attachments && task.attachments.length > 0 && (
        <div className="mb-4">
          <div className="relative w-full overflow-hidden rounded-lg">
            <Image
              src={`/${task.attachments[0].fileURL}`}
              alt={task.attachments[0].fileName}
              width={600}
              height={300}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Task Title and Description */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {task.title}
        </h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {task.description || "No description provided"}
        </p>
      </div>

      {/* Metadata */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="flex flex-col gap-[2px]">
          <p>
            <span className="font-medium">ID:</span> {task.id}
          </p>
          <p>
            <span className="font-medium">Status:</span>{" "}
            <span
              className={`inline-block rounded-md px-2 py-1 text-xs font-bold ${
                task.status === "Completed"
                  ? "bg-green-100 text-green-600"
                  : "bg-yellow-100 text-yellow-600"
              }`}
            >
              {task.status}
            </span>
          </p>
          <p>
            <span className="font-medium">Priority:</span>{" "}
            <span
              className={`inline-block rounded-md px-2 py-1 text-xs font-bold ${
                task.priority === "High"
                  ? "bg-red-100 text-red-600"
                  : "bg-blue-100 text-blue-600"
              }`}
            >
              {task.priority}
            </span>
          </p>
          <p>
            <span className="font-medium">Tags:</span> {task.tags || "No tags"}
          </p>
        </div>

        <div className="flex flex-col gap-[2px]">
          <p>
            <span className="font-medium">Start Date:</span>{" "}
            {task.startDate ? format(new Date(task.startDate), "P") : "Not set"}
          </p>
          <p>
            <span className="font-medium">Due Date:</span>{" "}
            {task.dueDate ? format(new Date(task.dueDate), "P") : "Not set"}
          </p>
          <p>
            <span className="font-medium">Author:</span>{" "}
            {task.author ? task.author.username : "Unknown"}
          </p>
          <p>
            <span className="font-medium">Assignee:</span>{" "}
            {task.assignee ? task.assignee.username : "Unassigned"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
