namespace :start do
  task :development do
    exec 'foreman start'
  end
end

desc 'Start development server'
task :start => 'start:development'