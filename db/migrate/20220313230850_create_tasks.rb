class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.boolean :status, default: false
      t.string :task_type
      t.string :schedule

      t.timestamps
    end
  end
end
