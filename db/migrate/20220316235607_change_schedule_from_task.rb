class ChangeScheduleFromTask < ActiveRecord::Migration[7.0]
  def change
    add_column :tasks, :task_start, :integer
    add_column :tasks, :task_end, :integer
    remove_column :tasks, :schedule, :string
  end
end
