class CreateTask1s < ActiveRecord::Migration[5.2]
  def change
    create_table :task1s do |t|
      t.boolean :done
      t.text :description

      t.timestamps
    end
  end
end
