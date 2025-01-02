OmniAuth.config.allowed_request_methods = [:post]

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :github, ENV['GITHUB_ID'],   ENV['GITHUB_SECRET'], callback_path: "/auth/github/callback" #scope: 'email,profile'
end
