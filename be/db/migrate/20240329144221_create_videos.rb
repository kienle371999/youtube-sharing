class CreateVideos < ActiveRecord::Migration[7.1]
  def change
    create_table :videos do |t|
      t.string :link
      t.text :title
      t.text :description
      t.integer :like_number
      t.integer :dislike_number
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
