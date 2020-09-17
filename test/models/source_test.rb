# == Schema Information
#
# Table name: sources
#
#  id         :bigint           not null, primary key
#  blurb      :string
#  code       :string
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_sources_on_name  (name)
#
require 'test_helper'

class SourceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
