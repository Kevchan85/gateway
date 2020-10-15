const UserProfile = require('../user-profile')

describe('user profile', () => {
  describe('Tests User profiles', () => {
    let user;
    const password = 'password';
    UserProfile.init()

    it('should be defined', async () => {
      expect(UserProfile.baseDir).toBeDefined()
    });

    it('should contain config', async () => {
      expect(UserProfile.configDir).toContain('config')
    });

    it('should contain data', async () => {
      expect(UserProfile.sslDir).toContain('ssl')
    });

    it('should contain ssl', async () => {
      expect(UserProfile.dataDir).toContain('data')
    });

    it('should contain uploads', async () => {
      expect(UserProfile.uploadsDir).toContain('uploads')
    });

    it('should contain media', async () => {
      expect(UserProfile.mediaDir).toContain('media')
    });

    it('should contain log', async () => {
      expect(UserProfile.logDir).toContain('log')
    });
  });
});
