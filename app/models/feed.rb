# == Schema Information
#
# Table name: feeds
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  source_id  :integer          not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_feeds_on_user_id_and_source_id  (user_id,source_id) UNIQUE
#
class Feed < ApplicationRecord
  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :source,
    foreign_key: :source_id,
    class_name: :Source
end
