Rails.application.routes.draw do
  resources :gig_songs
  resources :songs
  resources :singers
  resources :singer_parts
  resources :parts
  resources :gigs
  resources :gig_singers
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
