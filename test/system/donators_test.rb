require "application_system_test_case"

class DonatorsTest < ApplicationSystemTestCase
  setup do
    @donator = donators(:one)
  end

  test "visiting the index" do
    visit donators_url
    assert_selector "h1", text: "Donators"
  end

  test "creating a Donator" do
    visit donators_url
    click_on "New Donator"

    fill_in "Amount", with: @donator.amount
    fill_in "Product", with: @donator.product_id
    fill_in "User", with: @donator.user_id
    click_on "Create Donator"

    assert_text "Donator was successfully created"
    click_on "Back"
  end

  test "updating a Donator" do
    visit donators_url
    click_on "Edit", match: :first

    fill_in "Amount", with: @donator.amount
    fill_in "Product", with: @donator.product_id
    fill_in "User", with: @donator.user_id
    click_on "Update Donator"

    assert_text "Donator was successfully updated"
    click_on "Back"
  end

  test "destroying a Donator" do
    visit donators_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Donator was successfully destroyed"
  end
end
