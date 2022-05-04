if Rails.env.development?
  JsFromRoutes.config do |config|
    config.client_library = '@js-from-routes/axios'
  end
end
